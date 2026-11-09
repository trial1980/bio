'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Timer,
  Play,
  Pause,
  Flag,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Send,
  RotateCcw,
  Sparkles,
  Clock,
  FileText,
  Trophy,
  BarChart3,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  ExamSessionResult,
  OptionKey,
  PdfSourceId,
  Question,
} from '@/lib/types';
import {
  ALL_QUESTIONS,
  CHAPTERS,
  CHAPTERS_BY_ID,
  QUESTIONS_BY_ID,
} from '@/lib/questions';
import {
  EXAM_DEFAULT_QUESTION_COUNT,
  EXAM_DEFAULT_TIME_LIMIT_SECONDS,
  formatDurationHuman,
  formatTimer,
  generateExamQuestions,
  gradeExamSession,
  isAnswerCorrect,
} from '@/lib/quiz-engine';

interface ExamSimulatorViewProps {
  examHistory: ExamSessionResult[];
  initialReviewExam: ExamSessionResult | null;
  onClearInitialReviewExam: () => void;
  onCompleteExam: (result: ExamSessionResult) => void;
  onGoToWrongBank: () => void;
  onOpenPdfAtPage: (
    pdfSource: PdfSourceId,
    page: number,
    title: string
  ) => void;
  autoStartExam?: boolean;
}

type SimulatorStage = 'setup' | 'active' | 'results';
type ReviewFilter = 'all' | 'wrong' | 'correct' | 'skipped' | 'flagged';

export function ExamSimulatorView({
  examHistory,
  initialReviewExam,
  onClearInitialReviewExam,
  onCompleteExam,
  onGoToWrongBank,
  onOpenPdfAtPage,
  autoStartExam = false,
}: ExamSimulatorViewProps) {
  const [stage, setStage] = useState<SimulatorStage>(() => {
    if (initialReviewExam) return 'results';
    if (autoStartExam) return 'active';
    return 'setup';
  });
  const [selectedChapterIds, setSelectedChapterIds] = useState<string[]>(() =>
    CHAPTERS.map((c) => c.id)
  );

  // Active exam state
  const [examQuestions, setExamQuestions] = useState<Question[]>(() =>
    autoStartExam && !initialReviewExam
      ? generateExamQuestions(ALL_QUESTIONS, EXAM_DEFAULT_QUESTION_COUNT)
      : []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, OptionKey>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [remainingSeconds, setRemainingSeconds] = useState(
    EXAM_DEFAULT_TIME_LIMIT_SECONDS
  );
  const [isPaused, setIsPaused] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  // Results / Review state
  const [activeResult, setActiveResult] = useState<ExamSessionResult | null>(
    () => initialReviewExam
  );
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');

  const startNewExam = useCallback(() => {
    onClearInitialReviewExam();
    const drawn = generateExamQuestions(
      ALL_QUESTIONS,
      EXAM_DEFAULT_QUESTION_COUNT,
      selectedChapterIds.length > 0 ? selectedChapterIds : undefined
    );
    setExamQuestions(drawn);
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    setRemainingSeconds(EXAM_DEFAULT_TIME_LIMIT_SECONDS);
    setIsPaused(false);
    setConfirmSubmit(false);
    setActiveResult(null);
    setStage('active');
  }, [onClearInitialReviewExam, selectedChapterIds]);

  const finalizeAndSubmitExam = useCallback(
    (finalRemainingSeconds: number) => {
      if (examQuestions.length === 0) return;
      const elapsed = Math.max(
        1,
        EXAM_DEFAULT_TIME_LIMIT_SECONDS - finalRemainingSeconds
      );
      const graded = gradeExamSession({
        questions: examQuestions,
        answers,
        flaggedIds,
        durationSeconds: elapsed,
        timeLimitSeconds: EXAM_DEFAULT_TIME_LIMIT_SECONDS,
      });
      setActiveResult(graded);
      setStage('results');
      setReviewFilter('all');
      setConfirmSubmit(false);
      onCompleteExam(graded);
    },
    [examQuestions, answers, flaggedIds, onCompleteExam]
  );

  // 60-Minute (3600s) Countdown Timer Effect
  useEffect(() => {
    if (stage !== 'active' || isPaused) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finalizeAndSubmitExam(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stage, isPaused, finalizeAndSubmitExam]);

  const toggleChapterSelection = (chId: string) => {
    setSelectedChapterIds((prev) =>
      prev.includes(chId) ? prev.filter((id) => id !== chId) : [...prev, chId]
    );
  };

  const toggleFlagQuestion = (qId: string) => {
    setFlaggedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const answeredCount = Object.keys(answers).length;
  const examProgressPercent =
    examQuestions.length > 0
      ? Math.round((answeredCount / examQuestions.length) * 100)
      : 0;

  // Questions for results review
  const reviewQuestions = useMemo(() => {
    if (!activeResult) return [];
    const list = activeResult.questionIds
      .map((id) => QUESTIONS_BY_ID[id])
      .filter((q): q is Question => Boolean(q));

    return list.filter((q) => {
      const chosen = activeResult.answers[q.id];
      const isRight = chosen !== undefined && isAnswerCorrect(q, chosen);
      const isFlagged = activeResult.flaggedIds.includes(q.id);

      if (reviewFilter === 'wrong') return chosen !== undefined && !isRight;
      if (reviewFilter === 'correct') return isRight;
      if (reviewFilter === 'skipped') return chosen === undefined;
      if (reviewFilter === 'flagged') return isFlagged;
      return true;
    });
  }, [activeResult, reviewFilter]);

  // ============================================================================
  // STAGE 1: SETUP SCREEN
  // ============================================================================
  if (stage === 'setup') {
    const bioIds = CHAPTERS.filter((c) => (c.subject || 'Biochemistry') === 'Biochemistry').map((c) => c.id);
    const anatIds = CHAPTERS.filter((c) => c.subject === 'Anatomy').map((c) => c.id);
    const histIds = CHAPTERS.filter((c) => c.subject === 'Histology').map((c) => c.id);

    return (
      <div className="mx-auto max-w-[1440px] space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs sm:p-8 dark:border-slate-800/90 dark:bg-slate-900">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <p className="font-mono text-xs font-semibold tracking-wider text-teal-700 uppercase dark:text-teal-400">
                Official End-of-Module Assessment Format
              </p>
              <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
                60-Question Medical Exam Simulator
              </h1>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                Simulate real Module 101 &amp; 102 examination conditions with{' '}
                <strong className="font-semibold text-slate-900 dark:text-slate-100">
                  60 randomized questions
                </strong>{' '}
                and a{' '}
                <strong className="font-semibold text-slate-900 dark:text-slate-100">
                  60-minute (60:00) countdown timer
                </strong>
                . Choose to test across all 54 chapters, Biochemistry only, Upper Limb Anatomy only, or Histology only.
              </p>

              {/* Spec Specifications Grid */}
              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Random Draw
                  </div>
                  <div className="mt-1 font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                    60 MCQs
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    From {ALL_QUESTIONS.length} verified questions
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Strict Time Limit
                  </div>
                  <div className="mt-1 font-mono text-2xl font-bold tabular-nums text-teal-700 dark:text-teal-400">
                    60:00 Mins
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    1 minute per question pace
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Post-Exam Analytics
                  </div>
                  <div className="mt-1 font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                    54 Chapters
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    17 Bio + 33 Anat + 4 Hist
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={startNewExam}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-teal-700 active:scale-[0.99] dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>Start 60-Minute Exam (60 Random Questions)</span>
                </button>
              </div>
            </div>

            {/* Chapter Scope Customization Box */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-5 lg:col-span-5 dark:border-slate-800 dark:bg-slate-950/50">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
                <div>
                  <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                    Included Chapters ({selectedChapterIds.length} / {CHAPTERS.length})
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Select subject preset or customize chapters below
                  </p>
                </div>
              </div>

              {/* Subject Scope Presets */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedChapterIds(CHAPTERS.map((c) => c.id))}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedChapterIds.length === CHAPTERS.length
                      ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950'
                      : 'border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  All 54 Chapters
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedChapterIds(bioIds)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedChapterIds.length === bioIds.length &&
                    selectedChapterIds.every((id) => bioIds.includes(id))
                      ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950'
                      : 'border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  Biochemistry Only (17)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedChapterIds(anatIds)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedChapterIds.length === anatIds.length &&
                    selectedChapterIds.every((id) => anatIds.includes(id))
                      ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950'
                      : 'border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  Anatomy Only (33)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedChapterIds(histIds)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedChapterIds.length === histIds.length &&
                    selectedChapterIds.every((id) => histIds.includes(id))
                      ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950'
                      : 'border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  Histology Only (4)
                </button>
              </div>

              <div className="mt-3 grid max-h-60 grid-cols-1 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-2">
                {CHAPTERS.map((ch) => {
                  const checked = selectedChapterIds.includes(ch.id);
                  const subjPrefix =
                    ch.subject === 'Anatomy'
                      ? 'Anat'
                      : ch.subject === 'Histology'
                      ? 'Hist'
                      : 'Bio';
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => toggleChapterSelection(ch.id)}
                      className={`flex items-center justify-between rounded-lg border px-2.5 py-2 text-left text-xs transition-colors ${
                        checked
                          ? 'border-teal-500/50 bg-white font-semibold text-slate-900 dark:border-teal-500/40 dark:bg-slate-900 dark:text-slate-100'
                          : 'border-transparent bg-slate-100/70 text-slate-500 dark:bg-slate-900/40 dark:text-slate-500'
                      }`}
                    >
                      <span className="truncate">
                        <span className="font-mono text-[11px] text-teal-700 dark:text-teal-400">
                          {subjPrefix} {ch.number}:
                        </span>{' '}
                        {ch.shortTitle}
                      </span>
                      <span
                        className={`ml-1.5 h-2 w-2 shrink-0 rounded-full ${
                          checked ? 'bg-teal-500' : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Exam History Table */}
        {examHistory.length > 0 && (
          <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Previous 60-Minute Exam Sessions ({examHistory.length})
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {examHistory.map((exam, idx) => (
                <div
                  key={exam.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                      EXAM #{examHistory.length - idx} · {exam.scorePercentage}% (
                      {exam.correctCount}/{exam.totalQuestions})
                    </div>
                    <div className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                      Duration: {formatDurationHuman(exam.durationSeconds)} ·{' '}
                      {exam.chapterBreakdown.length} Chapters Tested
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveResult(exam);
                      setStage('results');
                    }}
                    className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-600 dark:bg-slate-800 dark:hover:bg-teal-500 dark:hover:text-slate-950"
                  >
                    Inspect Report
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // ============================================================================
  // STAGE 2: ACTIVE 60-MINUTE EXAM SESSION
  // ============================================================================
  if (stage === 'active') {
    const currentQuestion = examQuestions[currentIndex];
    if (!currentQuestion) return null;

    const currentChapter = CHAPTERS_BY_ID[currentQuestion.chapterId];
    const selectedOpt = answers[currentQuestion.id];
    const isFlagged = flaggedIds.includes(currentQuestion.id);
    const isLowTime = remainingSeconds < 300; // < 5 mins warning

    return (
      <div className="mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Sticky Exam Control & 60:00 Countdown Bar */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs sm:p-5 dark:border-slate-800/90 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-xl font-bold tabular-nums ${
                  isLowTime
                    ? 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    : 'border-teal-200 bg-teal-50/70 text-teal-800 dark:border-teal-800/70 dark:bg-teal-950/50 dark:text-teal-300'
                }`}
                aria-label="Exam countdown timer"
              >
                <Timer className="h-5 w-5" />
                <span>{formatTimer(remainingSeconds)}</span>
              </div>

              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
              >
                {isPaused ? (
                  <>
                    <Play className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Resume Timer</span>
                  </>
                ) : (
                  <>
                    <Pause className="h-3.5 w-3.5 text-amber-500" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
              <span className="font-mono tabular-nums text-slate-700 dark:text-slate-300">
                Answered:{' '}
                <strong className="text-teal-700 dark:text-teal-400">
                  {answeredCount} / {examQuestions.length}
                </strong>{' '}
                ({examProgressPercent}%)
              </span>
              <span className="font-mono tabular-nums text-amber-600 dark:text-amber-400">
                Flagged: {flaggedIds.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {confirmSubmit ? (
                <div className="flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs dark:border-amber-800 dark:bg-amber-950/50">
                  <span className="font-semibold text-amber-900 dark:text-amber-200">
                    Submit ({answeredCount}/{examQuestions.length} answered)?
                  </span>
                  <button
                    type="button"
                    onClick={() => finalizeAndSubmitExam(remainingSeconds)}
                    className="rounded-lg bg-teal-600 px-2.5 py-1 font-bold text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950"
                  >
                    Confirm &amp; Grade
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmSubmit(false)}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmSubmit(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-teal-600 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Exam &amp; View Results</span>
                </button>
              )}
            </div>
          </div>

          {/* Exam Completion Progress Bar */}
          <div className="mt-3.5 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-teal-600 dark:bg-teal-400"
              initial={{ width: 0 }}
              animate={{ width: `${examProgressPercent}%` }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </div>

        {/* Main Active Question Layout + 60-Question Palette */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Active Question Card */}
          <div className="space-y-4 lg:col-span-8">
            <article className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs sm:p-8 dark:border-slate-800/90 dark:bg-slate-900">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono text-sm font-bold text-teal-700 dark:text-teal-400">
                    QUESTION {currentIndex + 1} OF {examQuestions.length}
                  </span>
                  <span>·</span>
                  <span>
                    Ch {currentQuestion.chapterNumber}:{' '}
                    {currentChapter?.shortTitle ?? currentQuestion.chapterId}
                  </span>
                  <span>·</span>
                  <span>{currentQuestion.sourceTag}</span>
                </div>

                <button
                  type="button"
                  onClick={() => toggleFlagQuestion(currentQuestion.id)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    isFlagged
                      ? 'border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-600 dark:bg-amber-950/60 dark:text-amber-300'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  <Flag className={`h-3.5 w-3.5 ${isFlagged ? 'fill-current' : ''}`} />
                  <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
                </button>
              </div>

              <h2 className="mt-5 font-sans text-lg leading-relaxed font-semibold text-slate-900 sm:text-xl dark:text-slate-100">
                {currentQuestion.stem}
              </h2>

              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedOpt === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [currentQuestion.id]: opt.key,
                        }))
                      }
                      className={`flex w-full items-start gap-3.5 rounded-xl border p-4 text-left text-sm transition-all ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/80 text-teal-950 shadow-2xs dark:border-teal-400 dark:bg-teal-950/50 dark:text-teal-100'
                          : 'border-slate-200/90 bg-slate-50/50 text-slate-800 hover:border-slate-300 hover:bg-slate-100/60 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200 dark:hover:border-slate-700'
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold uppercase ${
                          isSelected
                            ? 'bg-teal-600 text-white dark:bg-teal-400 dark:text-slate-950'
                            : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="pt-0.5 leading-snug font-medium">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  {selectedOpt && (
                    <button
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => {
                          const next = { ...prev };
                          delete next[currentQuestion.id];
                          return next;
                        })
                      }
                      className="rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:text-rose-600 dark:text-slate-400"
                    >
                      Clear Choice
                    </button>
                  )}

                  {currentIndex < examQuestions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentIndex((i) =>
                          Math.min(examQuestions.length - 1, i + 1)
                        )
                      }
                      className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
                    >
                      <span>Next Question</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => finalizeAndSubmitExam(remainingSeconds)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Finish &amp; Grade Exam</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          </div>

          {/* 60-Question Navigator Grid */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  60-Question Navigator
                </h3>
                <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                  {answeredCount}/60 Done
                </span>
              </div>

              <div className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-10 lg:grid-cols-6">
                {examQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAns = answers[q.id] !== undefined;
                  const isFlg = flaggedIds.includes(q.id);

                  let cellClass =
                    'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400';
                  if (isCurrent) {
                    cellClass =
                      'border-slate-900 bg-slate-900 text-white ring-2 ring-teal-500/40 dark:border-white dark:bg-white dark:text-slate-950';
                  } else if (isFlg) {
                    cellClass =
                      'border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-600 dark:bg-amber-950/60 dark:text-amber-300';
                  } else if (isAns) {
                    cellClass =
                      'border-teal-500/50 bg-teal-50 text-teal-800 dark:border-teal-500/40 dark:bg-teal-950/50 dark:text-teal-300';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`flex h-9 items-center justify-center rounded-lg border font-mono text-xs font-bold tabular-nums transition-all ${cellClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-3 text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-xs bg-teal-500" /> Answered
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-xs bg-amber-400" /> Flagged
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-xs border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800" />{' '}
                  Unanswered
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  // ============================================================================
  // STAGE 3: EXAM RESULTS & CHAPTER ANALYTICS REPORT
  // ============================================================================
  if (!activeResult) return null;

  return (
    <div className="mx-auto max-w-[1440px] space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Results Summary Banner */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs sm:p-8 dark:border-slate-800/90 dark:bg-slate-900">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-teal-700 uppercase dark:text-teal-400">
              60-Minute Simulated Exam Report
            </p>
            <h1 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Final Score: {activeResult.scorePercentage}% ({activeResult.correctCount} /{' '}
              {activeResult.totalQuestions})
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Completed in{' '}
              <span className="font-mono font-semibold">
                {formatDurationHuman(activeResult.durationSeconds)}
              </span>{' '}
              out of 60:00 minutes ·{' '}
              {activeResult.wrongCount === 1
                ? '1 incorrect answer has been synced to your Wrong Answered Questions bank.'
                : `All ${activeResult.wrongCount} incorrect answers have been synced to your Wrong Answered Questions bank.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {activeResult.wrongCount > 0 && (
              <button
                type="button"
                onClick={onGoToWrongBank}
                className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-bold text-rose-700 hover:bg-rose-100 dark:border-rose-900/60 dark:bg-rose-950/50 dark:text-rose-300"
              >
                <span>
                  Remediate {activeResult.wrongCount} Wrong{' '}
                  {activeResult.wrongCount === 1 ? 'Answer' : 'Answers'}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={startNewExam}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Take New 60-Question Exam</span>
            </button>
          </div>
        </div>

        {/* 4 KPI Strip for Exam */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Accuracy Score</span>
              <Trophy className="h-4 w-4 text-amber-500" />
            </div>
            <div className="mt-2 font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
              {activeResult.scorePercentage}%
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Correct / Wrong</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2 font-mono text-2xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
              {activeResult.correctCount}{' '}
              <span className="text-base text-rose-600 dark:text-rose-400">
                / {activeResult.wrongCount}✗
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Unanswered / Skipped</span>
              <Layers className="h-4 w-4 text-slate-400" />
            </div>
            <div className="mt-2 font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
              {activeResult.skippedCount}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Time Elapsed</span>
              <Clock className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="mt-2 font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
              {formatDurationHuman(activeResult.durationSeconds)}
            </div>
          </div>
        </div>

        {/* Chapter-by-Chapter Performance Analytics in This Exam */}
        <div className="mt-7 border-t border-slate-200/80 pt-6 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Chapter-by-Chapter Exam Performance Breakdown
            </h2>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeResult.chapterBreakdown.map((cb) => (
              <div
                key={cb.chapterId}
                className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 dark:border-slate-800 dark:bg-slate-950/40"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="truncate font-semibold text-slate-800 dark:text-slate-200">
                    {cb.chapterTitle}
                  </span>
                  <span className="font-mono font-bold tabular-nums text-teal-700 dark:text-teal-400">
                    {cb.correct}/{cb.total} ({cb.accuracy}%)
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className={`h-full rounded-full ${
                      cb.accuracy >= 75
                        ? 'bg-emerald-500'
                        : cb.accuracy >= 50
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${cb.accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 60-Question Review with Explanations */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
            Question-by-Question Review &amp; Explanations
          </h2>

          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: 'all', label: `All (${activeResult.totalQuestions})` },
                { id: 'wrong', label: `Wrong (${activeResult.wrongCount})` },
                { id: 'correct', label: `Correct (${activeResult.correctCount})` },
                { id: 'skipped', label: `Skipped (${activeResult.skippedCount})` },
                { id: 'flagged', label: `Flagged (${activeResult.flaggedIds.length})` },
              ] as { id: ReviewFilter; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setReviewFilter(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  reviewFilter === tab.id
                    ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {reviewQuestions.map((q) => {
            const chosen = activeResult.answers[q.id];
            const isRight = chosen !== undefined && isAnswerCorrect(q, chosen);
            const ch = CHAPTERS_BY_ID[q.chapterId];

            return (
              <article
                key={q.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 text-xs dark:border-slate-800">
                  <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      Ch {q.chapterNumber}: {ch?.shortTitle} · Q#{q.questionNumber}
                    </span>
                    <span>·</span>
                    <span>{q.sourceTag}</span>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenPdfAtPage(
                          q.pdfSource,
                          q.pdfPage,
                          `Ch ${q.chapterNumber} Q#${q.questionNumber}`
                        )
                      }
                      className="inline-flex items-center gap-1 font-mono text-[11px] hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      <FileText className="h-3 w-3" />
                      PDF p.{q.pdfPage}
                    </button>
                  </div>

                  <span
                    className={`font-mono font-bold ${
                      chosen === undefined
                        ? 'text-amber-600 dark:text-amber-400'
                        : isRight
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {chosen === undefined
                      ? 'Skipped'
                      : isRight
                      ? 'Correct'
                      : `Incorrect (Chose ${chosen.toUpperCase()})`}
                  </span>
                </div>

                <h3 className="mt-4 font-sans text-base font-semibold text-slate-900 dark:text-slate-100">
                  {q.stem}
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {q.options.map((opt) => {
                    const isOptRight = isAnswerCorrect(q, opt.key);
                    const isOptChosen = chosen === opt.key;

                    let style =
                      'border-slate-200/70 bg-slate-50/40 text-slate-600 dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-400';
                    if (isOptRight) {
                      style =
                        'border-emerald-500/80 bg-emerald-50/80 text-emerald-950 font-semibold dark:border-emerald-500/70 dark:bg-emerald-950/40 dark:text-emerald-100';
                    } else if (isOptChosen && !isOptRight) {
                      style =
                        'border-rose-500/80 bg-rose-50/80 text-rose-950 font-semibold dark:border-rose-500/70 dark:bg-rose-950/40 dark:text-rose-100';
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`flex items-start justify-between gap-3 rounded-xl border p-3 text-sm ${style}`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="font-mono text-xs font-bold uppercase">
                            {opt.key}.
                          </span>
                          <span>{opt.text}</span>
                        </div>
                        {isOptRight && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        )}
                        {isOptChosen && !isOptRight && (
                          <XCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-xl border border-teal-200/80 bg-teal-50/50 p-4 dark:border-teal-900/60 dark:bg-teal-950/30">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 dark:text-teal-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>
                      Biochemical Explanation · Answer Key:{' '}
                      <span className="font-mono uppercase">{q.correctOption}</span>
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-700 sm:text-sm dark:text-slate-300">
                    {q.explanation}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
