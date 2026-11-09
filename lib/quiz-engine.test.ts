import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  ALL_QUESTIONS,
  CHAPTERS,
  QUESTIONS_BY_ID,
} from './questions';
import {
  applyExamToProgress,
  calculateOverallAnalytics,
  createInitialProgressState,
  EXAM_DEFAULT_QUESTION_COUNT,
  EXAM_DEFAULT_TIME_LIMIT_SECONDS,
  formatTimer,
  generateExamQuestions,
  getWrongQuestions,
  gradeExamSession,
  isAnswerCorrect,
  recordQuestionAttempt,
  removeFromWrongBank,
  resetChapterProgress,
  toggleBookmark,
} from './quiz-engine';
import { OptionKey } from './types';

describe('MedBank 101–102 Multi-Subject Question Bank & Quiz Engine', () => {
  it('loads all 54 separated chapters (17 Biochemistry + 33 Upper Limb Anatomy + 4 Histology) and all 2,003 authentic questions with explanations', () => {
    assert.equal(CHAPTERS.length, 54);
    assert.equal(ALL_QUESTIONS.length, 2003, `Expected all 2,003 questions, got ${ALL_QUESTIONS.length}`);

    const bioQuestions = ALL_QUESTIONS.filter((q) => (q.subject || 'Biochemistry') === 'Biochemistry');
    const anatQuestions = ALL_QUESTIONS.filter((q) => q.subject === 'Anatomy');
    const histQuestions = ALL_QUESTIONS.filter((q) => q.subject === 'Histology');
    assert.equal(bioQuestions.length, 1137);
    assert.equal(anatQuestions.length, 581);
    assert.equal(histQuestions.length, 285);

    for (const ch of CHAPTERS) {
      const chQuestions = ALL_QUESTIONS.filter((q) => q.chapterId === ch.id);
      assert.ok(
        chQuestions.length >= ch.totalPdfQuestions,
        `Chapter ${ch.id} (${ch.title}) should have at least ${ch.totalPdfQuestions} questions, got ${chQuestions.length}`
      );
      for (const q of chQuestions) {
        assert.ok(q.stem.length > 3, `Question ${q.id} should have a stem`);
        assert.ok(q.explanation.length > 15, `Question ${q.id} should have an explanation`);
        assert.ok(q.options.length >= 4, `Question ${q.id} should have >=4 options`);
        assert.ok(
          q.options.some((o) => o.key === q.correctOption),
          `Question ${q.id} correctOption ${q.correctOption} must exist in options`
        );
      }
    }
  });

  it('tracks wrong answers and resolves them when subsequently answered right', () => {
    let state = createInitialProgressState(false);
    const q = QUESTIONS_BY_ID['ch1-q1'];
    assert.ok(q);

    const wrongOpt: OptionKey = q.options.find((o) => o.key !== q.correctOption)!.key;

    // 1. Answer wrong
    state = recordQuestionAttempt(state, q, wrongOpt, 1000);
    assert.equal(state.attempts[q.id].isCorrect, false);
    assert.equal(state.attempts[q.id].wrongCount, 1);

    let wrongLists = getWrongQuestions(state);
    assert.equal(wrongLists.active.length, 1);
    assert.equal(wrongLists.active[0].id, q.id);
    assert.equal(wrongLists.resolved.length, 0);

    // 2. Answer right -> moves from active wrong to resolved wrong
    state = recordQuestionAttempt(state, q, q.correctOption, 2000);
    assert.equal(state.attempts[q.id].isCorrect, true);
    assert.equal(state.attempts[q.id].wrongCount, 1);
    assert.equal(state.attempts[q.id].resolvedFromWrongBank, true);

    wrongLists = getWrongQuestions(state);
    assert.equal(wrongLists.active.length, 0);
    assert.equal(wrongLists.resolved.length, 1);
    assert.equal(wrongLists.resolved[0].id, q.id);
  });

  it('supports manual removal from wrong bank and chapter reset', () => {
    let state = createInitialProgressState(false);
    const q = QUESTIONS_BY_ID['ch2-q1'];
    const wrongOpt: OptionKey = q.options.find((o) => o.key !== q.correctOption)!.key;

    state = recordQuestionAttempt(state, q, wrongOpt, 1000);
    assert.equal(getWrongQuestions(state).active.length, 1);

    state = removeFromWrongBank(state, q.id);
    assert.equal(getWrongQuestions(state).active.length, 0);
    assert.equal(getWrongQuestions(state).resolved.length, 1);

    state = resetChapterProgress(state, 'ch2');
    assert.equal(state.attempts[q.id], undefined);
  });

  it('generates 60 unique random questions for the 60-minute Exam Simulator', () => {
    const examQuestions = generateExamQuestions(ALL_QUESTIONS, EXAM_DEFAULT_QUESTION_COUNT, undefined, 42);
    assert.equal(examQuestions.length, 60);

    const uniqueIds = new Set(examQuestions.map((q) => q.id));
    assert.equal(uniqueIds.size, 60);
  });

  it('grades a 60-question exam session with accurate score, skipped count, and chapter breakdown', () => {
    const examQuestions = generateExamQuestions(ALL_QUESTIONS, 60, undefined, 99);
    const answers: Record<string, OptionKey> = {};

    // Answer 45 right, 10 wrong, 5 skipped
    examQuestions.forEach((q, idx) => {
      if (idx < 45) {
        answers[q.id] = q.correctOption;
      } else if (idx < 55) {
        answers[q.id] = q.options.find((o) => o.key !== q.correctOption)!.key;
      }
    });

    const result = gradeExamSession({
      id: 'test-exam',
      questions: examQuestions,
      answers,
      flaggedIds: [examQuestions[0].id],
      durationSeconds: 1850,
      timeLimitSeconds: EXAM_DEFAULT_TIME_LIMIT_SECONDS,
      timestamp: 5000,
    });

    assert.equal(result.totalQuestions, 60);
    assert.equal(result.answeredCount, 55);
    assert.equal(result.correctCount, 45);
    assert.equal(result.wrongCount, 10);
    assert.equal(result.skippedCount, 5);
    assert.equal(result.scorePercentage, 75);
    assert.equal(result.timeLimitSeconds, 3600);
    assert.ok(result.chapterBreakdown.length > 0);

    // Sync exam to progress and verify wrong answers enter the Wrong Answered Questions bank
    let state = createInitialProgressState(false);
    state = applyExamToProgress(state, result);
    assert.equal(state.examHistory.length, 1);
    assert.equal(getWrongQuestions(state).active.length, 10);
  });

  it('calculates overall and per-chapter progression and accuracy analytics', () => {
    const seededState = createInitialProgressState(true);
    const analytics = calculateOverallAnalytics(seededState);

    assert.equal(analytics.totalQuestions, ALL_QUESTIONS.length);
    assert.ok(analytics.answeredQuestions > 50);
    assert.ok(analytics.activeWrongCount >= 5);
    assert.equal(analytics.examsTaken, 2);
    assert.equal(analytics.chapterAnalytics.length, 54);
  });

  it('formats countdown timer values accurately', () => {
    assert.equal(formatTimer(3600), '60:00');
    assert.equal(formatTimer(3599), '59:59');
    assert.equal(formatTimer(305), '05:05');
    assert.equal(formatTimer(0), '00:00');
    assert.equal(formatTimer(-10), '00:00');
  });

  it('toggles bookmarks and checks dual-accepted answer keys', () => {
    let state = createInitialProgressState(false);
    state = toggleBookmark(state, 'ch1-q1');
    assert.deepEqual(state.bookmarks, ['ch1-q1']);
    state = toggleBookmark(state, 'ch1-q1');
    assert.deepEqual(state.bookmarks, []);

    const dualKeyQ = QUESTIONS_BY_ID['ch2-q11'];
    if (dualKeyQ && dualKeyQ.alsoAcceptedOption) {
      assert.equal(isAnswerCorrect(dualKeyQ, dualKeyQ.correctOption), true);
      assert.equal(isAnswerCorrect(dualKeyQ, dualKeyQ.alsoAcceptedOption), true);
    }
  });
});
