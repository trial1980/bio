export type OptionKey = 'a' | 'b' | 'c' | 'd' | 'e';

export interface QuestionOption {
  key: OptionKey;
  text: string;
}

export interface Question {
  id: string; // e.g., "ch1-q1"
  chapterId: string; // e.g., "ch1"
  chapterNumber: number;
  questionNumber: number;
  questionLabel?: string; // e.g. "24-(1)" if sub-question
  stem: string;
  options: QuestionOption[];
  correctOption: OptionKey;
  alsoAcceptedOption?: OptionKey; // e.g. Ch2 Q62 has A&B in answer key
  sourceTag: string; // e.g. "End of module exam 2023"
  explanation: string;
  pdfSource: 'module102' | 'heme_purine';
  pdfPage: number;
  isCancelled?: boolean;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  category: 'Structural Biochemistry' | 'Enzymology & Bioenergetics' | 'Molecular Biology' | 'Metabolism';
  pdfSource: 'module102' | 'heme_purine';
  startPage: number;
  endPage: number;
  totalPdfQuestions: number;
}

export interface QuestionAttempt {
  questionId: string;
  selectedOption: OptionKey;
  isCorrect: boolean;
  timestamp: number;
  attemptsCount: number;
  wrongCount: number;
  resolvedFromWrongBank?: boolean;
}

export interface ChapterExamBreakdown {
  chapterId: string;
  chapterTitle: string;
  total: number;
  correct: number;
  accuracy: number;
}

export interface ExamSessionResult {
  id: string;
  timestamp: number;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  scorePercentage: number;
  durationSeconds: number; // out of 3600
  timeLimitSeconds: number; // 3600
  questionIds: string[];
  answers: Record<string, OptionKey>;
  flaggedIds: string[];
  chapterBreakdown: ChapterExamBreakdown[];
}

export interface UserProgressState {
  attempts: Record<string, QuestionAttempt>;
  bookmarks: string[];
  examHistory: ExamSessionResult[];
  lastActiveChapterId: string;
}

export interface ChapterAnalytics {
  chapter: Chapter;
  totalQuestions: number;
  answeredQuestions: number;
  correctQuestions: number;
  wrongQuestions: number;
  unansweredQuestions: number;
  progressionPercentage: number;
  accuracyPercentage: number;
}

export interface OverallAnalytics {
  totalQuestions: number;
  answeredQuestions: number;
  correctQuestions: number;
  wrongQuestions: number;
  activeWrongCount: number;
  resolvedWrongCount: number;
  progressionPercentage: number;
  accuracyPercentage: number;
  examsTaken: number;
  averageExamScore: number;
  bestExamScore: number;
  chapterAnalytics: ChapterAnalytics[];
}
