'use client';

import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  Bookmark,
  FileText,
  RotateCcw,
  Search,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  LayoutList,
  Maximize2,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChapterAnalytics,
  OptionKey,
  Question,
  QuestionAttempt,
} from '@/lib/types';
import { getQuestionsByChapter } from '@/lib/questions';
import { isAnswerCorrect } from '@/lib/quiz-engine';

interface ChapterPracticeViewProps {
  activeChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  chapterAnalyticsList: ChapterAnalytics[];
  attempts: Record<string, QuestionAttempt>;
  bookmarks: string[];
  onAnswerQuestion: (question: Question, option: OptionKey) => void;
  onToggleBookmark: (questionId: string) => void;
  onResetChapter: (chapterId: string) => void;
  onOpenPdfAtPage: (
    pdfSource: 'module102' | 'heme_purine',
    page: number,
    title: string
  ) => void;
}

type QuestionFilter = 'all' | 'unanswered' | 'correct' | 'wrong' | 'bookmarked';

export function ChapterPracticeView({
  activeChapterId,
  onSelectChapter,
  chapterAnalyticsList,
  attempts,
  bookmarks,
  onAnswerQuestion,
  onToggleBookmark,
  onResetChapter,
  onOpenPdfAtPage,
}: ChapterPracticeViewProps) {
  const [filter, setFilter] = useState<QuestionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealAllExplanations, setRevealAllExplanations] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'focus'>('list');
  const [focusIndex, setFocusIndex] = useState(0);
  const [sessionAnsweredIds, setSessionAnsweredIds] = useState<string[]>([]);

  const activeChapterData = useMemo(() => {
    return (
      chapterAnalyticsList.find((c) => c.chapter.id === activeChapterId) ??
      chapterAnalyticsList[0]
    );
  }, [chapterAnalyticsList, activeChapterId]);

  const chapterQuestions = useMemo(() => {
    return getQuestionsByChapter(activeChapterData.chapter.id);
  }, [activeChapterData.chapter.id]);

  const filteredQuestions = useMemo(() => {
    return chapterQuestions.filter((q) => {
      const attempt = attempts[q.id];
      const isBookmarked = bookmarks.includes(q.id);

      if (
        filter === 'unanswered' &&
        attempt !== undefined &&
        !sessionAnsweredIds.includes(q.id)
      ) {
        return false;
      }
      if (filter === 'correct' && (!attempt || !attempt.isCorrect)) return false;
      if (filter === 'wrong' && (!attempt || attempt.isCorrect)) return false;
      if (filter === 'bookmarked' && !isBookmarked) return false;

      const query = searchQuery.trim().toLowerCase();
      if (query) {
        const inStem = q.stem.toLowerCase().includes(query);
        const inExplanation = q.explanation.toLowerCase().includes(query);
        const inOptions = q.options.some((o) => o.text.toLowerCase().includes(query));
        const inSource = q.sourceTag.toLowerCase().includes(query);
        if (!inStem && !inExplanation && !inOptions && !inSource) return false;
      }

      return true;
    });
  }, [chapterQuestions, attempts, bookmarks, filter, searchQuery, sessionAnsweredIds]);

  const safeFocusIndex = Math.min(
    Math.max(0, focusIndex),
    Math.max(0, filteredQuestions.length - 1)
  );

  const displayedQuestions =
    viewMode === 'focus'
      ? filteredQuestions.slice(safeFocusIndex, safeFocusIndex + 1)
      : filteredQuestions;

  const {
    chapter,
    totalQuestions,
    answeredQuestions,
    correctQuestions,
    wrongQuestions,
    unansweredQuestions,
    progressionPercentage,
    accuracyPercentage,
  } = activeChapterData;

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Sidebar: All 17 Separated Chapters */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <div className="sticky top-20 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 dark:border-slate-800/80">
              <div>
                <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  17 Separated Chapters
                </h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Select a chapter to study &amp; track progress
                </p>
              </div>
              <BookOpen className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            </div>

            <div className="mt-3 max-h-[68vh] space-y-1.5 overflow-y-auto pr-1">
              {chapterAnalyticsList.map((item) => {
                const isSelected = item.chapter.id === chapter.id;
                return (
                  <button
                    key={item.chapter.id}
                    type="button"
                    onClick={() => {
                      onSelectChapter(item.chapter.id);
                      setFocusIndex(0);
                      setSessionAnsweredIds([]);
                    }}
                    className={`w-full rounded-xl border p-3 text-left transition-all ${
                      isSelected
                        ? 'border-teal-500/60 bg-teal-50/70 shadow-2xs dark:border-teal-500/50 dark:bg-teal-950/40'
                        : 'border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:border-slate-800 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[11px] font-bold ${
                          isSelected
                            ? 'text-teal-700 dark:text-teal-400'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        CH {String(item.chapter.number).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                        {item.answeredQuestions}/{item.totalQuestions} · {item.progressionPercentage}%
                      </span>
                    </div>
                    <div className="mt-1 truncate font-display text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {item.chapter.shortTitle}
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-teal-600 transition-all duration-300 dark:bg-teal-400"
                        style={{ width: `${item.progressionPercentage}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Main Content: Active Chapter Header, Filters & MCQ Cards */}
        <div className="space-y-6 lg:col-span-8 xl:col-span-9">
          {/* Chapter Progression & Analytics Header Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono font-bold text-teal-700 dark:text-teal-400">
                  CHAPTER {String(chapter.number).padStart(2, '0')}
                </span>
                <span>·</span>
                <span>{chapter.category}</span>
                <span>·</span>
                <span className="font-mono">
                  {chapter.pdfSource === 'module102' ? 'Module 102 PDF' : 'Heme & Purine PDF'} (pp.{' '}
                  {chapter.startPage}–{chapter.endPage})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    onOpenPdfAtPage(
                      chapter.pdfSource,
                      chapter.startPage,
                      `Ch ${chapter.number}: ${chapter.title}`
                    )
                  }
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <FileText className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Open Chapter PDF</span>
                </button>

                {answeredQuestions > 0 && (
                  <button
                    type="button"
                    onClick={() => onResetChapter(chapter.id)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-rose-800 dark:hover:text-rose-400"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Reset Chapter</span>
                  </button>
                )}
              </div>
            </div>

            <h1 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              {chapter.title}
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {chapter.description}
            </p>

            {/* Chapter Progression Bar & Live Stats */}
            <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Chapter Progression:
                  </span>
                  <span className="font-mono font-bold tabular-nums text-teal-700 dark:text-teal-400">
                    {progressionPercentage}% ({answeredQuestions} / {totalQuestions} answered)
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 font-mono tabular-nums">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Accuracy: {answeredQuestions > 0 ? `${accuracyPercentage}%` : '—'}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {correctQuestions} Correct
                  </span>
                  <span className="text-rose-600 dark:text-rose-400">
                    {wrongQuestions} Wrong
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {unansweredQuestions} Left
                  </span>
                </div>
              </div>

              <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <motion.div
                  className="h-full rounded-full bg-teal-600 dark:bg-teal-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressionPercentage}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>

            {/* Filter Controls, Search & View Mode Switch */}
            <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-200/80 pt-4 xl:flex-row xl:items-center dark:border-slate-800/80">
              <div className="flex flex-wrap items-center gap-1.5">
                {(
                  [
                    { id: 'all', label: `All (${totalQuestions})` },
                    { id: 'unanswered', label: `Unanswered (${unansweredQuestions})` },
                    { id: 'correct', label: `Correct (${correctQuestions})` },
                    { id: 'wrong', label: `Wrong (${wrongQuestions})` },
                    { id: 'bookmarked', label: 'Bookmarked' },
                  ] as { id: QuestionFilter; label: string }[]
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setFilter(tab.id);
                      setFocusIndex(0);
                      setSessionAnsweredIds([]);
                    }}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                      filter === tab.id
                        ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                        : 'border border-slate-200/80 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setFocusIndex(0);
                    }}
                    placeholder="Search questions or explanations..."
                    aria-label="Search questions in chapter"
                    className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pr-3 pl-8 text-xs text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none sm:w-52 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setRevealAllExplanations((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    revealAllExplanations
                      ? 'border-teal-500/50 bg-teal-50 text-teal-800 dark:border-teal-500/50 dark:bg-teal-950/60 dark:text-teal-300'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  {revealAllExplanations ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5" />
                      <span>Hide Unanswered Keys</span>
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5" />
                      <span>Study Mode (Show All Explanations)</span>
                    </>
                  )}
                </button>

                <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-800 dark:bg-slate-950">
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium ${
                      viewMode === 'list'
                        ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <LayoutList className="h-3.5 w-3.5" />
                    <span>List</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('focus')}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium ${
                      viewMode === 'focus'
                        ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>Focus Card</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Card Pagination Bar */}
          {viewMode === 'focus' && filteredQuestions.length > 0 && (
            <div className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-4 py-3 dark:border-slate-800/90 dark:bg-slate-900">
              <button
                type="button"
                disabled={safeFocusIndex === 0}
                onClick={() => setFocusIndex((i) => Math.max(0, i - 1))}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 disabled:opacity-40 dark:border-slate-800 dark:text-slate-300"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous Question
              </button>
              <span className="font-mono text-xs font-semibold tabular-nums text-slate-600 dark:text-slate-300">
                Question {safeFocusIndex + 1} of {filteredQuestions.length}
              </span>
              <button
                type="button"
                disabled={safeFocusIndex >= filteredQuestions.length - 1}
                onClick={() =>
                  setFocusIndex((i) => Math.min(filteredQuestions.length - 1, i + 1))
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 disabled:opacity-40 dark:border-slate-800 dark:text-slate-300"
              >
                Next Question
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Questions List */}
          {displayedQuestions.length === 0 ? (
            <div className="rounded-2xl border border-slate-200/90 bg-white p-12 text-center dark:border-slate-800/90 dark:bg-slate-900">
              <p className="font-display text-base font-bold text-slate-900 dark:text-white">
                No questions match the current filter
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Try switching back to &ldquo;All&rdquo; or clearing your search query.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 rounded-xl bg-teal-600 px-4 py-2 text-xs font-semibold text-white dark:bg-teal-500 dark:text-slate-950"
              >
                Show All Chapter Questions
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {displayedQuestions.map((q) => {
                const attempt = attempts[q.id];
                const isAnswered = attempt !== undefined;
                const isBookmarked = bookmarks.includes(q.id);
                const showExplanation = isAnswered || revealAllExplanations;

                return (
                  <article
                    key={q.id}
                    className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-colors dark:border-slate-800/90 dark:bg-slate-900"
                  >
                    {/* Clean Inline Question Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-slate-800/80">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono font-bold text-slate-900 dark:text-white">
                          Q#{q.questionLabel ?? q.questionNumber}
                        </span>
                        <span>·</span>
                        <span className="font-medium text-teal-700 dark:text-teal-400">
                          {q.sourceTag}
                        </span>
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
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                        >
                          <FileText className="h-3 w-3" />
                          PDF p.{q.pdfPage}
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        {isAnswered && (
                          <span
                            className={`inline-flex items-center gap-1 font-mono text-xs font-semibold ${
                              attempt.isCorrect
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-rose-600 dark:text-rose-400'
                            }`}
                          >
                            {attempt.isCorrect ? (
                              <>
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Correct
                              </>
                            ) : (
                              <>
                                <XCircle className="h-3.5 w-3.5" />
                                Incorrect
                              </>
                            )}
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => onToggleBookmark(q.id)}
                          aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
                          className={`rounded-lg p-1.5 transition-colors ${
                            isBookmarked
                              ? 'text-amber-500 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/50'
                              : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                          }`}
                        >
                          <Bookmark
                            className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Question Stem */}
                    <h3 className="mt-4 font-sans text-base leading-relaxed font-semibold text-slate-900 sm:text-lg dark:text-slate-100">
                      {q.stem}
                    </h3>

                    {/* Options Grid */}
                    <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {q.options.map((opt) => {
                        const isSelected = attempt?.selectedOption === opt.key;
                        const isThisOptionCorrect = isAnswerCorrect(q, opt.key);

                        let optionStyle =
                          'border-slate-200/90 bg-slate-50/60 text-slate-800 hover:border-teal-500/60 hover:bg-teal-50/30 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200 dark:hover:border-teal-500/50 dark:hover:bg-teal-950/20';

                        if (showExplanation) {
                          if (isThisOptionCorrect) {
                            optionStyle =
                              'border-emerald-500/80 bg-emerald-50/80 text-emerald-950 dark:border-emerald-500/70 dark:bg-emerald-950/40 dark:text-emerald-100';
                          } else if (isSelected && !isThisOptionCorrect) {
                            optionStyle =
                              'border-rose-500/80 bg-rose-50/80 text-rose-950 dark:border-rose-500/70 dark:bg-rose-950/40 dark:text-rose-100';
                          } else {
                            optionStyle =
                              'border-slate-200/60 bg-slate-50/30 text-slate-500 opacity-75 dark:border-slate-800/60 dark:bg-slate-950/30 dark:text-slate-400';
                          }
                        }

                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => {
                              setSessionAnsweredIds((prev) =>
                                prev.includes(q.id) ? prev : [...prev, q.id]
                              );
                              onAnswerQuestion(q, opt.key);
                            }}
                            className={`flex items-start justify-between gap-3 rounded-xl border p-3.5 text-left text-sm transition-all duration-150 ${optionStyle}`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold uppercase ${
                                  showExplanation && isThisOptionCorrect
                                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950'
                                    : showExplanation && isSelected && !isThisOptionCorrect
                                    ? 'bg-rose-600 text-white dark:bg-rose-500 dark:text-white'
                                    : 'bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                                }`}
                              >
                                {opt.key}
                              </span>
                              <span className="pt-0.5 leading-snug font-medium">
                                {opt.text}
                              </span>
                            </div>

                            {showExplanation && isThisOptionCorrect && (
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            )}
                            {showExplanation && isSelected && !isThisOptionCorrect && (
                              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    <AnimatePresence initial={false}>
                      {showExplanation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 rounded-xl border border-teal-200/80 bg-teal-50/50 p-4 dark:border-teal-900/60 dark:bg-teal-950/30">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 dark:text-teal-300">
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>
                                  Biochemical Explanation · Answer Key:{' '}
                                  <span className="font-mono uppercase">
                                    {q.correctOption}
                                    {q.alsoAcceptedOption
                                      ? ` / ${q.alsoAcceptedOption}`
                                      : ''}
                                  </span>
                                </span>
                              </div>

                              {attempt && !attempt.isCorrect && (
                                <span className="font-mono text-[11px] font-medium text-rose-600 dark:text-rose-400">
                                  Added to Wrong Questions Bank for remediation
                                </span>
                              )}
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm dark:text-slate-300">
                              {q.explanation}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          )}

          {/* Quick Next Chapter Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 dark:border-slate-800/90 dark:bg-slate-900">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Currently viewing{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                Chapter {chapter.number}: {chapter.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {chapter.number > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const prev = chapterAnalyticsList.find(
                      (c) => c.chapter.number === chapter.number - 1
                    );
                    if (prev) {
                      onSelectChapter(prev.chapter.id);
                      setFocusIndex(0);
                    }
                  }}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Ch {chapter.number - 1}
                </button>
              )}
              {chapter.number < 17 && (
                <button
                  type="button"
                  onClick={() => {
                    const next = chapterAnalyticsList.find(
                      (c) => c.chapter.number === chapter.number + 1
                    );
                    if (next) {
                      onSelectChapter(next.chapter.id);
                      setFocusIndex(0);
                    }
                  }}
                  className="inline-flex items-center gap-1 rounded-xl bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
                >
                  Continue to Ch {chapter.number + 1}
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
