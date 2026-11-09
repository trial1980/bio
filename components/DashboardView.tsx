'use client';

import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Timer,
  ArrowRight,
  RotateCcw,
  Sparkles,
  FileText,
  Trophy,
  Target,
  Layers,
  Search,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  Chapter,
  ExamSessionResult,
  OverallAnalytics,
  PdfSourceId,
  SubjectId,
} from '@/lib/types';
import { formatDurationHuman } from '@/lib/quiz-engine';

interface DashboardViewProps {
  analytics: OverallAnalytics;
  examHistory: ExamSessionResult[];
  lastActiveChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  onGoToWrongBank: () => void;
  onStartExamSimulator: () => void;
  onInspectPastExam: (exam: ExamSessionResult) => void;
  onOpenPdfAtPage: (pdfSource: PdfSourceId, page: number, title: string) => void;
  onResetAllProgress: () => void;
  onRestoreDemoProgress: () => void;
}

export function DashboardView({
  analytics,
  examHistory,
  lastActiveChapterId,
  onSelectChapter,
  onGoToWrongBank,
  onStartExamSimulator,
  onInspectPastExam,
  onOpenPdfAtPage,
  onResetAllProgress,
  onRestoreDemoProgress,
}: DashboardViewProps) {
  const [selectedSubject, setSelectedSubject] = useState<'ALL' | SubjectId>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<'All' | Chapter['category']>('All');
  const [chapterQuery, setChapterQuery] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  const lastActiveChapter = useMemo(() => {
    return (
      analytics.chapterAnalytics.find((c) => c.chapter.id === lastActiveChapterId)?.chapter ??
      analytics.chapterAnalytics[0]?.chapter
    );
  }, [analytics.chapterAnalytics, lastActiveChapterId]);

  const subjectScopedChapters = useMemo(() => {
    if (selectedSubject === 'ALL') return analytics.chapterAnalytics;
    return analytics.chapterAnalytics.filter(
      (c) => (c.chapter.subject || 'Biochemistry') === selectedSubject
    );
  }, [analytics.chapterAnalytics, selectedSubject]);

  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    for (const item of subjectScopedChapters) {
      cats.add(item.chapter.category);
    }
    return ['All', ...Array.from(cats)];
  }, [subjectScopedChapters]);

  const filteredChapters = useMemo(() => {
    return subjectScopedChapters.filter((item) => {
      const matchesCat =
        selectedCategory === 'All' || item.chapter.category === selectedCategory;
      const q = chapterQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.chapter.title.toLowerCase().includes(q) ||
        item.chapter.shortTitle.toLowerCase().includes(q) ||
        item.chapter.description.toLowerCase().includes(q) ||
        `chapter ${item.chapter.number}`.includes(q);
      return matchesCat && matchesSearch;
    });
  }, [subjectScopedChapters, selectedCategory, chapterQuery]);

  // Subject-level stats
  const subjectStats = useMemo(() => {
    const bioChapters = analytics.chapterAnalytics.filter(
      (c) => (c.chapter.subject || 'Biochemistry') === 'Biochemistry'
    );
    const anatChapters = analytics.chapterAnalytics.filter(
      (c) => c.chapter.subject === 'Anatomy'
    );
    const histChapters = analytics.chapterAnalytics.filter(
      (c) => c.chapter.subject === 'Histology'
    );
    const sumStats = (list: OverallAnalytics['chapterAnalytics']) => {
      const total = list.reduce((acc, c) => acc + c.totalQuestions, 0);
      const answered = list.reduce((acc, c) => acc + c.answeredQuestions, 0);
      const correct = list.reduce((acc, c) => acc + c.correctQuestions, 0);
      const wrong = list.reduce((acc, c) => acc + c.wrongQuestions, 0);
      const prog = total > 0 ? Math.round((answered / total) * 100) : 0;
      const acc = answered > 0 ? Math.round((correct / answered) * 100) : 0;
      return { total, answered, correct, wrong, prog, acc, chaptersCount: list.length };
    };
    return {
      ALL: sumStats(analytics.chapterAnalytics),
      Biochemistry: sumStats(bioChapters),
      Anatomy: sumStats(anatChapters),
      Histology: sumStats(histChapters),
    };
  }, [analytics.chapterAnalytics]);

  const activeSubjectSummary =
    selectedSubject === 'Anatomy'
      ? subjectStats.Anatomy
      : selectedSubject === 'Histology'
      ? subjectStats.Histology
      : selectedSubject === 'Biochemistry'
      ? subjectStats.Biochemistry
      : subjectStats.ALL;

  const unansweredTotal = Math.max(
    0,
    activeSubjectSummary.total - activeSubjectSummary.answered
  );

  const correctBarPercent =
    activeSubjectSummary.total > 0
      ? (activeSubjectSummary.correct / activeSubjectSummary.total) * 100
      : 0;
  const wrongBarPercent =
    activeSubjectSummary.total > 0
      ? (activeSubjectSummary.wrong / activeSubjectSummary.total) * 100
      : 0;

  return (
    <div className="mx-auto max-w-[1440px] space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Progression & Quick Action Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-slate-800/90 dark:bg-slate-900">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-2">
            <p className="font-mono text-xs font-medium tracking-wider text-teal-700 uppercase dark:text-teal-400">
              Complete Medical MCQ Question Bank · Module 101 &amp; Module 102
            </p>
            <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-slate-50">
              Mastery Dashboard &amp; Multi-Subject Progression
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              Track your question-by-question progression across all{' '}
              <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">54</span>{' '}
              separated chapters (<span className="font-mono font-semibold">1,137</span> Biochemistry MCQs
              + <span className="font-mono font-semibold">581</span> Upper Limb Anatomy MCQs +{' '}
              <span className="font-mono font-semibold">285</span> Histology MCQs ={' '}
              <span className="font-mono font-semibold">2,003</span> total questions), remediate wrong
              answers, and benchmark under timed 60-minute exam conditions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {lastActiveChapter && (
              <button
                type="button"
                onClick={() => onSelectChapter(lastActiveChapter.id)}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-teal-700 active:scale-[0.99] dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                <BookOpen className="h-4 w-4" />
                <span>
                  Continue{' '}
                  {lastActiveChapter.subject === 'Anatomy'
                    ? 'Anat'
                    : lastActiveChapter.subject === 'Histology'
                    ? 'Hist'
                    : 'Bio'}{' '}
                  Ch {lastActiveChapter.number}: {lastActiveChapter.shortTitle}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onStartExamSimulator}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              <Timer className="h-4 w-4 text-amber-400" />
              <span>Start 60-Min Exam (60Q)</span>
            </button>
          </div>
        </div>

        {/* Multi-Subject Selector Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                {
                  id: 'ALL',
                  label: 'All Subjects',
                  meta: `${subjectStats.ALL.total} Qs · ${subjectStats.ALL.chaptersCount} Ch`,
                },
                {
                  id: 'Biochemistry',
                  label: 'Biochemistry (Mod 102)',
                  meta: `${subjectStats.Biochemistry.total} Qs · ${subjectStats.Biochemistry.chaptersCount} Ch`,
                },
                {
                  id: 'Anatomy',
                  label: 'Anatomy — Upper Limb',
                  meta: `${subjectStats.Anatomy.total} Qs · ${subjectStats.Anatomy.chaptersCount} Ch`,
                },
                {
                  id: 'Histology',
                  label: 'Histology (Semester 1)',
                  meta: `${subjectStats.Histology.total} Qs · ${subjectStats.Histology.chaptersCount} Ch`,
                },
              ] as const
            ).map((subj) => {
              const isSelected = selectedSubject === subj.id;
              return (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => {
                    setSelectedSubject(subj.id);
                    setSelectedCategory('All');
                  }}
                  className={`flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-left text-xs font-semibold transition-all ${
                    isSelected
                      ? 'border-teal-600 bg-teal-600 text-white shadow-2xs dark:border-teal-400 dark:bg-teal-500 dark:text-slate-950'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{subj.label}</span>
                  <span
                    className={`font-mono text-[11px] tabular-nums ${
                      isSelected
                        ? 'text-teal-100 dark:text-slate-900'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {subj.meta}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono text-[11px]">
              Physiology slot ready for next PDF upload
            </span>
          </div>
        </div>

        {/* Segmented Overall Bank Progression Bar */}
        <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-800/80 dark:bg-slate-950/60">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                {selectedSubject === 'ALL'
                  ? 'Overall Combined Bank Progression'
                  : `${selectedSubject} Bank Progression`}
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                  {activeSubjectSummary.prog}%
                </span>
                <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                  ({activeSubjectSummary.answered} of {activeSubjectSummary.total} questions answered across{' '}
                  {activeSubjectSummary.chaptersCount} chapters)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-500" />
                <span className="font-mono tabular-nums">{activeSubjectSummary.correct}</span> Correct
              </span>
              <span className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400">
                <span className="h-2.5 w-2.5 rounded-xs bg-rose-500" />
                <span className="font-mono tabular-nums">{activeSubjectSummary.wrong}</span> Wrong
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <span className="h-2.5 w-2.5 rounded-xs bg-slate-300 dark:bg-slate-700" />
                <span className="font-mono tabular-nums">{unansweredTotal}</span> Remaining
              </span>
            </div>
          </div>

          <div className="mt-3 flex h-3.5 w-full overflow-hidden rounded-full bg-slate-200/90 dark:bg-slate-800">
            <motion.div
              className="h-full bg-emerald-500 transition-all duration-500"
              initial={{ width: 0 }}
              animate={{ width: `${correctBarPercent}%` }}
              title={`Correct: ${activeSubjectSummary.correct}`}
            />
            <motion.div
              className="h-full bg-rose-500 transition-all duration-500"
              initial={{ width: 0 }}
              animate={{ width: `${wrongBarPercent}%` }}
              title={`Wrong: ${activeSubjectSummary.wrong}`}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-3 text-xs text-slate-500 dark:border-slate-800/70 dark:text-slate-400">
            <span>
              Biochemistry: 1,137 Qs (17 Ch) · Upper Limb Anatomy: 581 Qs (33 Ch) · Histology: 285 Qs (4 Ch)
            </span>
            <div className="flex items-center gap-3">
              {analytics.answeredQuestions === 0 ? (
                <button
                  type="button"
                  onClick={onRestoreDemoProgress}
                  className="inline-flex items-center gap-1 font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Load Sample Study Analytics
                </button>
              ) : confirmReset ? (
                <div className="flex items-center gap-2">
                  <span className="text-rose-600 dark:text-rose-400">Clear all history?</span>
                  <button
                    type="button"
                    onClick={() => {
                      onResetAllProgress();
                      setConfirmReset(false);
                    }}
                    className="font-semibold text-rose-600 underline dark:text-rose-400"
                  >
                    Yes, Reset to 0%
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmReset(true)}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset All Progress
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Card KPI Summary Strip */}
      <section
        aria-label="Key Performance Indicators"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Card 1: Bank Coverage */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              Chapters &amp; Completion
            </span>
            <Layers className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="mt-3 font-mono text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
            {activeSubjectSummary.answered}{' '}
            <span className="text-lg font-normal text-slate-400 dark:text-slate-500">
              / {activeSubjectSummary.total}
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            Across{' '}
            <span className="font-mono font-semibold tabular-nums">
              {activeSubjectSummary.chaptersCount}
            </span>{' '}
            separated chapters
          </p>
        </div>

        {/* Card 2: Overall Accuracy */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              Accuracy Rate
            </span>
            <Target className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="mt-3 font-mono text-3xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
            {activeSubjectSummary.acc}%
          </div>
          <p className="mt-2 font-mono text-xs tabular-nums text-slate-600 dark:text-slate-400">
            {activeSubjectSummary.correct} correct · {activeSubjectSummary.wrong} incorrect
          </p>
        </div>

        {/* Card 3: Wrong Answered Remediation */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              Wrong Answered Bank
            </span>
            <AlertTriangle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="font-mono text-3xl font-bold tabular-nums text-rose-600 dark:text-rose-400">
              {analytics.activeWrongCount}
            </span>
            <button
              type="button"
              onClick={onGoToWrongBank}
              className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
            >
              Remediate Now
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="mt-2 font-mono text-xs tabular-nums text-slate-600 dark:text-slate-400">
            {analytics.resolvedWrongCount} previously wrong questions mastered
          </p>
        </div>

        {/* Card 4: Exam Simulator Analytics */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              60-Min Exam Average
            </span>
            <Trophy className="h-4 w-4 text-amber-500 dark:text-amber-400" />
          </div>
          <div className="mt-3 font-mono text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
            {analytics.examsTaken > 0 ? `${analytics.averageExamScore}%` : '—'}
          </div>
          <p className="mt-2 font-mono text-xs tabular-nums text-slate-600 dark:text-slate-400">
            {analytics.examsTaken} exams taken · Best: {analytics.bestExamScore}%
          </p>
        </div>
      </section>

      {/* Chapter-by-Chapter Progression & Performance Section */}
      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-4 lg:flex-row lg:items-end dark:border-slate-800/80">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              Chapter-by-Chapter Progression &amp; Performance Analytics ({filteredChapters.length})
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Each chapter is separated with its own progression bar, accuracy analytics, and direct link to the source PDF pages.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={chapterQuery}
                onChange={(e) => setChapterQuery(e.target.value)}
                placeholder="Filter chapters by topic..."
                aria-label="Filter chapters by title or topic"
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pr-3 pl-9 text-xs text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none sm:w-56 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {availableCategories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                    : 'border border-slate-200/80 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {category === 'All'
                  ? `All ${subjectScopedChapters.length} Chapters`
                  : category}
              </button>
            );
          })}
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredChapters.map((item) => {
            const {
              chapter,
              totalQuestions,
              answeredQuestions,
              correctQuestions,
              wrongQuestions,
              progressionPercentage,
              accuracyPercentage,
            } = item;

            const subjBadge =
              chapter.subject === 'Anatomy'
                ? 'ANATOMY'
                : chapter.subject === 'Histology'
                ? 'HISTOLOGY'
                : 'BIOCHEM';

            const subjName =
              chapter.subject === 'Anatomy'
                ? 'Anatomy'
                : chapter.subject === 'Histology'
                ? 'Histology'
                : 'Biochemistry';

            return (
              <div
                key={chapter.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all duration-200 hover:border-teal-500/50 hover:shadow-md dark:border-slate-800/90 dark:bg-slate-900 dark:hover:border-teal-500/40"
              >
                <div>
                  {/* Clean Inline Unboxed Metadata */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono font-semibold text-teal-700 dark:text-teal-400">
                      {subjBadge} CH {String(chapter.number).padStart(2, '0')} ·{' '}
                      {chapter.category}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenPdfAtPage(
                          chapter.pdfSource,
                          chapter.startPage,
                          `${subjName} Ch ${chapter.number}: ${chapter.title}`
                        )
                      }
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                      title="Open original PDF at this chapter's start page"
                    >
                      <FileText className="h-3 w-3" />
                      pp. {chapter.startPage}–{chapter.endPage}
                    </button>
                  </div>

                  {/* Chapter Title & Description */}
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-900 group-hover:text-teal-700 dark:text-slate-100 dark:group-hover:text-teal-400">
                    {chapter.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {chapter.description}
                  </p>
                </div>

                <div className="mt-5 space-y-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                  {/* Chapter Progression Bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-600 dark:text-slate-400">
                        Progression:{' '}
                        <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-200">
                          {answeredQuestions}/{totalQuestions}
                        </span>
                      </span>
                      <span className="font-mono font-bold tabular-nums text-teal-700 dark:text-teal-400">
                        {progressionPercentage}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-teal-600 transition-all duration-300 dark:bg-teal-400"
                        style={{ width: `${progressionPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Chapter Performance Stats & Action */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 font-mono text-xs tabular-nums">
                      <span
                        className={
                          answeredQuestions > 0
                            ? accuracyPercentage >= 75
                              ? 'font-semibold text-emerald-600 dark:text-emerald-400'
                              : accuracyPercentage >= 50
                              ? 'font-semibold text-amber-600 dark:text-amber-400'
                              : 'font-semibold text-rose-600 dark:text-rose-400'
                            : 'text-slate-400 dark:text-slate-500'
                        }
                      >
                        {answeredQuestions > 0 ? `${accuracyPercentage}% Acc` : 'Not started'}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-emerald-600 dark:text-emerald-400" title="Correct">
                        {correctQuestions}✓
                      </span>
                      <span className="text-rose-600 dark:text-rose-400" title="Wrong">
                        {wrongQuestions}✗
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectChapter(chapter.id)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-teal-500 dark:hover:text-slate-950"
                    >
                      <span>{answeredQuestions > 0 ? 'Continue' : 'Start'}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Exam Simulator Performance & History Section */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs sm:p-8 dark:border-slate-800/90 dark:bg-slate-900">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-center dark:border-slate-800/80">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-amber-600 uppercase dark:text-amber-400">
              Timed Assessment Analytics
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              Exam Simulator Performance History (60 Questions · 60 Minutes)
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Detailed score progression, time efficiency, and chapter-level breakdown for every simulated exam taken.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartExamSimulator}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
          >
            <Timer className="h-4 w-4" />
            <span>Launch New 60-Min Exam</span>
          </button>
        </div>

        {examHistory.length === 0 ? (
          <div className="py-12 text-center">
            <Timer className="mx-auto h-10 w-10 text-slate-400" />
            <h3 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white">
              No Simulated Exams Taken Yet
            </h3>
            <p className="mx-auto mt-1 max-w-md text-xs text-slate-500 dark:text-slate-400">
              Take a 60-question randomized exam with a 60-minute countdown timer to benchmark your readiness across all 17 chapters.
            </p>
            <button
              type="button"
              onClick={onStartExamSimulator}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white dark:bg-slate-800"
            >
              Start First 60-Min Exam
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Visual Score Trend Chart */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 lg:col-span-5 dark:border-slate-800/80 dark:bg-slate-950/60">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    Exam Score Progression
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    Pass Target: 60%
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Chronological accuracy across your last {Math.min(examHistory.length, 6)} simulated exams
                </p>
              </div>

              <div className="mt-6 flex h-44 items-end gap-3 pt-6">
                {[...examHistory]
                  .slice(0, 6)
                  .reverse()
                  .map((exam, idx) => {
                    const barColor =
                      exam.scorePercentage >= 80
                        ? 'bg-emerald-500 dark:bg-emerald-400'
                        : exam.scorePercentage >= 60
                        ? 'bg-teal-500 dark:bg-teal-400'
                        : 'bg-rose-500 dark:bg-rose-400';

                    return (
                      <button
                        key={exam.id}
                        type="button"
                        onClick={() => onInspectPastExam(exam)}
                        className="group flex flex-1 flex-col items-center gap-2 focus:outline-none"
                        title={`Review Exam #${idx + 1}: ${exam.scorePercentage}% (${exam.correctCount}/${exam.totalQuestions})`}
                      >
                        <span className="font-mono text-xs font-bold tabular-nums text-slate-700 group-hover:text-teal-600 dark:text-slate-300 dark:group-hover:text-teal-400">
                          {exam.scorePercentage}%
                        </span>
                        <div className="relative flex h-28 w-full items-end overflow-hidden rounded-lg bg-slate-200/70 p-1 dark:bg-slate-800/70">
                          <div
                            className={`w-full rounded-md transition-all duration-300 ${barColor}`}
                            style={{ height: `${Math.max(10, exam.scorePercentage)}%` }}
                          />
                        </div>
                        <span className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                          Exam #{idx + 1}
                        </span>
                      </button>
                    );
                  })}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 text-xs text-slate-500 dark:border-slate-800/70 dark:text-slate-400">
                <span>Click any bar to inspect full 60Q report</span>
                <span className="font-mono font-semibold tabular-nums text-slate-800 dark:text-slate-200">
                  Avg: {analytics.averageExamScore}%
                </span>
              </div>
            </div>

            {/* Detailed Past Exams List */}
            <div className="space-y-3 lg:col-span-7">
              {examHistory.map((exam, index) => {
                const examNumber = examHistory.length - index;
                const dateStr = new Date(exam.timestamp).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                });

                return (
                  <div
                    key={exam.id}
                    className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200/80 bg-white p-5 transition-colors hover:border-teal-500/40 sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-950/40"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono font-bold text-slate-900 dark:text-white">
                          SIMULATED EXAM #{examNumber}
                        </span>
                        <span>·</span>
                        <span>{dateStr}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1 font-mono tabular-nums">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          {formatDurationHuman(exam.durationSeconds)} / 60m
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs">
                        <span className="flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span className="font-mono tabular-nums">{exam.correctCount}</span> Correct
                        </span>
                        <span className="flex items-center gap-1 font-medium text-rose-700 dark:text-rose-400">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          <span className="font-mono tabular-nums">{exam.wrongCount}</span> Wrong
                        </span>
                        <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">
                          {exam.skippedCount} Skipped
                        </span>
                        <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">
                          {exam.chapterBreakdown.length} Chapters Covered
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <div className="text-right">
                        <div className="font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                          {exam.scorePercentage}%
                        </div>
                        <div className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                          {exam.correctCount} / {exam.totalQuestions} pts
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onInspectPastExam(exam)}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-teal-600 hover:text-white dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-teal-500 dark:hover:text-slate-950"
                      >
                        <span>Review Analytics</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
