import {
  Chapter,
  ChapterAnalytics,
  ChapterExamBreakdown,
  ExamSessionResult,
  OptionKey,
  OverallAnalytics,
  Question,
  QuestionAttempt,
  UserProgressState,
} from './types';
import {
  ALL_QUESTIONS,
  CHAPTERS,
  CHAPTERS_BY_ID,
  QUESTIONS_BY_ID,
} from './questions';

export const EXAM_DEFAULT_QUESTION_COUNT = 60;
export const EXAM_DEFAULT_TIME_LIMIT_SECONDS = 3600; // 60 minutes

export function isAnswerCorrect(question: Question, selectedOption: OptionKey): boolean {
  if (question.isCancelled) return true;
  return (
    question.correctOption === selectedOption ||
    (question.alsoAcceptedOption !== undefined &&
      question.alsoAcceptedOption === selectedOption)
  );
}

export function formatTimer(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function formatDurationHuman(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  if (mins === 0) return `${secs}s`;
  if (secs === 0) return `${mins}m`;
  return `${mins}m ${secs}s`;
}

/**
 * Deterministic PRNG (Mulberry32) so seeded exams or initial demo data are reproducible.
 */
function createSeededRandom(seed: number): () => number {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateExamQuestions(
  allQuestions: Question[] = ALL_QUESTIONS,
  count: number = EXAM_DEFAULT_QUESTION_COUNT,
  chapterIds?: string[],
  seed?: number
): Question[] {
  const eligible = allQuestions.filter((q) => {
    if (q.isCancelled) return false;
    if (chapterIds && chapterIds.length > 0 && !chapterIds.includes(q.chapterId)) {
      return false;
    }
    return true;
  });

  const pool = [...eligible];
  const randomFn = seed !== undefined ? createSeededRandom(seed) : Math.random;

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(randomFn() * (i + 1));
    const temp = pool[i];
    pool[i] = pool[j];
    pool[j] = temp;
  }

  return pool.slice(0, Math.min(count, pool.length));
}

export function recordQuestionAttempt(
  state: UserProgressState,
  question: Question,
  selectedOption: OptionKey,
  timestamp: number = Date.now()
): UserProgressState {
  const correct = isAnswerCorrect(question, selectedOption);
  const existing = state.attempts[question.id];

  const prevAttempts = existing ? existing.attemptsCount : 0;
  const prevWrongCount = existing ? existing.wrongCount : 0;

  const newWrongCount = correct ? prevWrongCount : prevWrongCount + 1;
  const wasEverWrong = prevWrongCount > 0;

  const updatedAttempt: QuestionAttempt = {
    questionId: question.id,
    selectedOption,
    isCorrect: correct,
    timestamp,
    attemptsCount: prevAttempts + 1,
    wrongCount: newWrongCount,
    resolvedFromWrongBank: correct && wasEverWrong ? true : false,
  };

  return {
    ...state,
    lastActiveChapterId: question.chapterId,
    attempts: {
      ...state.attempts,
      [question.id]: updatedAttempt,
    },
  };
}

export function removeFromWrongBank(
  state: UserProgressState,
  questionId: string
): UserProgressState {
  const existing = state.attempts[questionId];
  if (!existing) return state;

  const question = QUESTIONS_BY_ID[questionId];
  const fallbackCorrectOption: OptionKey = question ? question.correctOption : existing.selectedOption;

  return {
    ...state,
    attempts: {
      ...state.attempts,
      [questionId]: {
        ...existing,
        isCorrect: true,
        selectedOption: fallbackCorrectOption,
        resolvedFromWrongBank: true,
      },
    },
  };
}

export function resetChapterProgress(
  state: UserProgressState,
  chapterId: string,
  allQuestions: Question[] = ALL_QUESTIONS
): UserProgressState {
  const chapterQuestionIds = new Set(
    allQuestions.filter((q) => q.chapterId === chapterId).map((q) => q.id)
  );
  const nextAttempts: Record<string, QuestionAttempt> = {};
  for (const [qId, attempt] of Object.entries(state.attempts)) {
    if (!chapterQuestionIds.has(qId)) {
      nextAttempts[qId] = attempt;
    }
  }
  return {
    ...state,
    attempts: nextAttempts,
  };
}

export function toggleBookmark(
  state: UserProgressState,
  questionId: string
): UserProgressState {
  const exists = state.bookmarks.includes(questionId);
  const nextBookmarks = exists
    ? state.bookmarks.filter((id) => id !== questionId)
    : [...state.bookmarks, questionId];

  return {
    ...state,
    bookmarks: nextBookmarks,
  };
}

export function getWrongQuestions(
  state: UserProgressState,
  questions: Question[] = ALL_QUESTIONS
): { active: Question[]; resolved: Question[] } {
  const active: Question[] = [];
  const resolved: Question[] = [];

  for (const q of questions) {
    const attempt = state.attempts[q.id];
    if (!attempt) continue;
    if (!attempt.isCorrect) {
      active.push(q);
    } else if (attempt.wrongCount > 0 && attempt.resolvedFromWrongBank) {
      resolved.push(q);
    }
  }

  return { active, resolved };
}

export function gradeExamSession(params: {
  id?: string;
  questions: Question[];
  answers: Record<string, OptionKey>;
  flaggedIds: string[];
  durationSeconds: number;
  timeLimitSeconds?: number;
  timestamp?: number;
}): ExamSessionResult {
  const {
    id = `exam-${params.timestamp ?? Date.now()}`,
    questions,
    answers,
    flaggedIds,
    durationSeconds,
    timeLimitSeconds = EXAM_DEFAULT_TIME_LIMIT_SECONDS,
    timestamp = Date.now(),
  } = params;

  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  const chapterStatsMap = new Map<
    string,
    { chapterId: string; chapterTitle: string; total: number; correct: number }
  >();

  for (const q of questions) {
    const ch = CHAPTERS_BY_ID[q.chapterId];
    const chTitle = ch ? `Ch ${ch.number}: ${ch.shortTitle}` : q.chapterId;
    if (!chapterStatsMap.has(q.chapterId)) {
      chapterStatsMap.set(q.chapterId, {
        chapterId: q.chapterId,
        chapterTitle: chTitle,
        total: 0,
        correct: 0,
      });
    }
    const chEntry = chapterStatsMap.get(q.chapterId)!;
    chEntry.total += 1;

    const chosen = answers[q.id];
    if (chosen !== undefined) {
      answeredCount += 1;
      if (isAnswerCorrect(q, chosen)) {
        correctCount += 1;
        chEntry.correct += 1;
      } else {
        wrongCount += 1;
      }
    }
  }

  const totalQuestions = questions.length;
  const skippedCount = Math.max(0, totalQuestions - answeredCount);
  const scorePercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const chapterBreakdown: ChapterExamBreakdown[] = Array.from(
    chapterStatsMap.values()
  )
    .map((item) => ({
      chapterId: item.chapterId,
      chapterTitle: item.chapterTitle,
      total: item.total,
      correct: item.correct,
      accuracy: item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0,
    }))
    .sort((a, b) => {
      const chA = CHAPTERS_BY_ID[a.chapterId]?.number ?? 99;
      const chB = CHAPTERS_BY_ID[b.chapterId]?.number ?? 99;
      return chA - chB;
    });

  return {
    id,
    timestamp,
    totalQuestions,
    answeredCount,
    correctCount,
    wrongCount,
    skippedCount,
    scorePercentage,
    durationSeconds: Math.min(Math.max(0, Math.round(durationSeconds)), timeLimitSeconds),
    timeLimitSeconds,
    questionIds: questions.map((q) => q.id),
    answers: { ...answers },
    flaggedIds: [...flaggedIds],
    chapterBreakdown,
  };
}

export function applyExamToProgress(
  state: UserProgressState,
  examResult: ExamSessionResult,
  questionsById: Record<string, Question> = QUESTIONS_BY_ID
): UserProgressState {
  let nextState: UserProgressState = {
    ...state,
    examHistory: [examResult, ...state.examHistory],
  };

  for (const qId of examResult.questionIds) {
    const selected = examResult.answers[qId];
    const question = questionsById[qId];
    if (selected && question) {
      nextState = recordQuestionAttempt(
        nextState,
        question,
        selected,
        examResult.timestamp
      );
    }
  }

  return nextState;
}

export function calculateOverallAnalytics(
  state: UserProgressState,
  chapters: Chapter[] = CHAPTERS,
  questions: Question[] = ALL_QUESTIONS
): OverallAnalytics {
  const chapterAnalytics: ChapterAnalytics[] = chapters.map((chapter) => {
    const chQuestions = questions.filter((q) => q.chapterId === chapter.id);
    const totalQuestions = chQuestions.length;
    let answeredQuestions = 0;
    let correctQuestions = 0;
    let wrongQuestions = 0;

    for (const q of chQuestions) {
      const attempt = state.attempts[q.id];
      if (attempt) {
        answeredQuestions += 1;
        if (attempt.isCorrect) {
          correctQuestions += 1;
        } else {
          wrongQuestions += 1;
        }
      }
    }

    const unansweredQuestions = Math.max(0, totalQuestions - answeredQuestions);
    const progressionPercentage =
      totalQuestions > 0
        ? Math.round((answeredQuestions / totalQuestions) * 100)
        : 0;
    const accuracyPercentage =
      answeredQuestions > 0
        ? Math.round((correctQuestions / answeredQuestions) * 100)
        : 0;

    return {
      chapter,
      totalQuestions,
      answeredQuestions,
      correctQuestions,
      wrongQuestions,
      unansweredQuestions,
      progressionPercentage,
      accuracyPercentage,
    };
  });

  const totalQuestions = questions.length;
  let answeredQuestions = 0;
  let correctQuestions = 0;
  let wrongQuestions = 0;
  let activeWrongCount = 0;
  let resolvedWrongCount = 0;

  for (const q of questions) {
    const attempt = state.attempts[q.id];
    if (attempt) {
      answeredQuestions += 1;
      if (attempt.isCorrect) {
        correctQuestions += 1;
        if (attempt.wrongCount > 0 && attempt.resolvedFromWrongBank) {
          resolvedWrongCount += 1;
        }
      } else {
        wrongQuestions += 1;
        activeWrongCount += 1;
      }
    }
  }

  const progressionPercentage =
    totalQuestions > 0
      ? Math.round((answeredQuestions / totalQuestions) * 100)
      : 0;
  const accuracyPercentage =
    answeredQuestions > 0
      ? Math.round((correctQuestions / answeredQuestions) * 100)
      : 0;

  const examsTaken = state.examHistory.length;
  const averageExamScore =
    examsTaken > 0
      ? Math.round(
          state.examHistory.reduce((acc, e) => acc + e.scorePercentage, 0) /
            examsTaken
        )
      : 0;
  const bestExamScore =
    examsTaken > 0
      ? Math.max(...state.examHistory.map((e) => e.scorePercentage))
      : 0;

  return {
    totalQuestions,
    answeredQuestions,
    correctQuestions,
    wrongQuestions,
    activeWrongCount,
    resolvedWrongCount,
    progressionPercentage,
    accuracyPercentage,
    examsTaken,
    averageExamScore,
    bestExamScore,
    chapterAnalytics,
  };
}

/**
 * Creates initial state. When withSeedData is true, populates realistic medical student
 * study history across the 17 chapters, 8 active wrong answers for immediate remediation,
 * 3 resolved wrong answers, and 2 past 60-question exam simulations.
 */
export function createInitialProgressState(
  withSeedData: boolean = true
): UserProgressState {
  if (!withSeedData) {
    return {
      attempts: {},
      bookmarks: [],
      examHistory: [],
      lastActiveChapterId: 'ch1',
    };
  }

  const baseTimestamp = 1730990000000;
  let state: UserProgressState = {
    attempts: {},
    bookmarks: ['ch1-q8', 'ch5-q11', 'ch7-q2', 'ch16-q1', 'ch17-q6'],
    examHistory: [],
    lastActiveChapterId: 'ch1',
  };

  // Seed realistic chapter practice attempts across Chapters 1–17
  const wrongTargetIds = new Set([
    'ch1-q6',  // Seleno-cysteine vs cysteine
    'ch2-q5',  // Protein denaturation primary structure intact
    'ch3-q7',  // Sorbitol cataract vs galactitol
    'ch4-q9',  // Cardiolipin mitochondrial inner membrane
    'ch5-q4',  // CO affinity & left shift
    'ch7-q8',  // Competitive inhibition Km increases, Vmax unchanged
    'ch10-q5', // Eukaryotic DNA polymerases alpha/delta/epsilon
    'ch16-q5', // Lead poisoning inhibits ALA dehydratase & ferrochelatase
    'ch17-q5', // Lesch-Nyhan HGPRT deficiency
  ]);

  const resolvedTargetIds = new Set([
    'ch1-q2',
    'ch3-q2',
    'ch6-q3',
  ]);

  // Answer ~68 questions across chapters so progression bars & chapter analytics look authentic
  const chaptersToSeed: Record<string, number> = {
    ch1: 11,
    ch2: 8,
    ch3: 9,
    ch4: 7,
    ch5: 6,
    ch6: 5,
    ch7: 6,
    ch8: 4,
    ch9: 4,
    ch10: 4,
    ch11: 3,
    ch12: 3,
    ch13: 2,
    ch14: 2,
    ch15: 2,
    ch16: 5,
    ch17: 4,
  };

  let offset = 0;
  for (const [chapterId, maxToAnswer] of Object.entries(chaptersToSeed)) {
    const chQuestions = ALL_QUESTIONS.filter((q) => q.chapterId === chapterId).slice(
      0,
      maxToAnswer
    );
    for (const q of chQuestions) {
      offset += 1;
      if (wrongTargetIds.has(q.id)) {
        const wrongOpt =
          q.options.find((o) => o.key !== q.correctOption)?.key ?? 'a';
        state = recordQuestionAttempt(
          state,
          q,
          wrongOpt,
          baseTimestamp + offset * 60000
        );
      } else if (resolvedTargetIds.has(q.id)) {
        const wrongOpt =
          q.options.find((o) => o.key !== q.correctOption)?.key ?? 'a';
        state = recordQuestionAttempt(
          state,
          q,
          wrongOpt,
          baseTimestamp + offset * 60000
        );
        state = recordQuestionAttempt(
          state,
          q,
          q.correctOption,
          baseTimestamp + offset * 60000 + 30000
        );
      } else {
        state = recordQuestionAttempt(
          state,
          q,
          q.correctOption,
          baseTimestamp + offset * 60000
        );
      }
    }
  }

  // Create 2 realistic past 60-question Exam Simulator sessions
  const exam1Questions = generateExamQuestions(ALL_QUESTIONS, 60, undefined, 10201);
  const exam1Answers: Record<string, OptionKey> = {};
  exam1Questions.forEach((q, idx) => {
    // 46 correct out of 60 (77%)
    if (idx < 46) {
      exam1Answers[q.id] = q.correctOption;
    } else if (idx < 58) {
      exam1Answers[q.id] =
        q.options.find((o) => o.key !== q.correctOption)?.key ?? 'a';
    }
    // 2 skipped
  });
  const exam1Result = gradeExamSession({
    id: 'exam-seed-1',
    questions: exam1Questions,
    answers: exam1Answers,
    flaggedIds: [exam1Questions[4]?.id, exam1Questions[19]?.id].filter(Boolean),
    durationSeconds: 2910, // 48m 30s
    timeLimitSeconds: 3600,
    timestamp: baseTimestamp - 86400000 * 3,
  });

  const exam2Questions = generateExamQuestions(ALL_QUESTIONS, 60, undefined, 10202);
  const exam2Answers: Record<string, OptionKey> = {};
  exam2Questions.forEach((q, idx) => {
    // 52 correct out of 60 (87%)
    if (idx < 52) {
      exam2Answers[q.id] = q.correctOption;
    } else {
      exam2Answers[q.id] =
        q.options.find((o) => o.key !== q.correctOption)?.key ?? 'b';
    }
  });
  const exam2Result = gradeExamSession({
    id: 'exam-seed-2',
    questions: exam2Questions,
    answers: exam2Answers,
    flaggedIds: [exam2Questions[12]?.id].filter(Boolean),
    durationSeconds: 2645, // 44m 05s
    timeLimitSeconds: 3600,
    timestamp: baseTimestamp - 86400000,
  });

  state.examHistory = [exam2Result, exam1Result];
  state.lastActiveChapterId = 'ch1';

  return state;
}
