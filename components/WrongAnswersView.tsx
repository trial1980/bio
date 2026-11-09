'use client';

import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  FileText,
  BookOpen,
  Check,
  Filter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  OptionKey,
  Question,
  QuestionAttempt,
} from '@/lib/types';
import { CHAPTERS_BY_ID } from '@/lib/questions';
import { isAnswerCorrect } from '@/lib/quiz-engine';

interface WrongAnswersViewProps {
  activeWrongQuestions: Question[];
  resolvedWrongQuestions: Question[];
  attempts: Record<string, QuestionAttempt>;
  onRetryAnswer: (question: Question, selectedOption: OptionKey) => void;
  onMarkResolved: (questionId: string) => void;
  onSelectChapter: (chapterId: string) => void;
  onOpenPdfAtPage: (
    pdfSource: 'module102' | 'heme_purine',
    page: number,
    title: string
  ) => void;
}

export function WrongAnswersView({
  activeWrongQuestions,
  resolvedWrongQuestions,
  attempts,
  onRetryAnswer,
  onMarkResolved,
  onSelectChapter,
  onOpenPdfAtPage,
}: WrongAnswersViewProps) {
  const [subTab, setSubTab] = useState<'active' | 'resolved'>('active');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [blindRetryIds, setBlindRetryIds] = useState<Record<string, boolean>>({});

  const totalEverWrong =
    activeWrongQuestions.length + resolvedWrongQuestions.length;
  const remediationPercent =
    totalEverWrong > 0
      ? Math.round((resolvedWrongQuestions.length / totalEverWrong) * 100)
      : 100;

  const sourceList =
    subTab === 'active' ? activeWrongQuestions : resolvedWrongQuestions;

  const availableChapters = useMemo(() => {
    const map = new Map<string, { id: string; label: string; count: number }>();
    for (const q of sourceList) {
      const ch = CHAPTERS_BY_ID[q.chapterId];
      const existing = map.get(q.chapterId);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(q.chapterId, {
          id: q.chapterId,
          label: ch ? `Ch ${ch.number}: ${ch.shortTitle}` : q.chapterId,
          count: 1,
        });
      }
    }
    return Array.from(map.values());
  }, [sourceList]);

  const filteredList = useMemo(() => {
    if (selectedChapterId === 'all') return sourceList;
    return sourceList.filter((q) => q.chapterId === selectedChapterId);
  }, [sourceList, selectedChapterId]);

  const toggleBlindRetryAll = () => {
    const anyBlind = filteredList.some((q) => blindRetryIds[q.id]);
    if (anyBlind) {
      setBlindRetryIds({});
    } else {
      const next: Record<string, boolean> = {};
      for (const q of filteredList) {
        next[q.id] = true;
      }
      setBlindRetryIds(next);
    }
  };

  return (
    <div className="mx-auto max-w-[1440px] space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      {/* Header & Remediation Progress Banner */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs sm:p-8 dark:border-slate-800/90 dark:bg-slate-900">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-2">
            <p className="font-mono text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
              Targeted Error Remediation Bank
            </p>
            <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Wrong Answered Questions &amp; Mastery Queue
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Every question answered incorrectly during chapter practice or timed 60-minute exams
              is automatically captured here. Re-attempt questions in blind retry mode or study their
              biochemical explanations to move them to your Resolved Mastery list.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-rose-200/80 bg-rose-50/70 px-4 py-3 dark:border-rose-900/60 dark:bg-rose-950/40">
              <div className="text-[11px] font-semibold tracking-wider text-rose-700 uppercase dark:text-rose-300">
                Active Wrong Queue
              </div>
              <div className="mt-0.5 font-mono text-2xl font-bold tabular-nums text-rose-600 dark:text-rose-400">
                {activeWrongQuestions.length}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-4 py-3 dark:border-emerald-900/60 dark:bg-emerald-950/40">
              <div className="text-[11px] font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
                Remediated &amp; Mastered
              </div>
              <div className="mt-0.5 font-mono text-2xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
                {resolvedWrongQuestions.length}
              </div>
            </div>
          </div>
        </div>

        {/* Remediation Progress Bar */}
        <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Error Resolution Rate
            </span>
            <span className="font-mono font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
              {remediationPercent}% ({resolvedWrongQuestions.length} of {totalEverWrong} resolved)
            </span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: `${remediationPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Controls Bar: Sub-tabs, Chapter Filter, Blind Retry Toggle */}
        <div className="mt-5 flex flex-col justify-between gap-4 border-t border-slate-200/80 pt-4 sm:flex-row sm:items-center dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSubTab('active');
                setSelectedChapterId('all');
              }}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors ${
                subTab === 'active'
                  ? 'bg-rose-600 text-white shadow-2xs dark:bg-rose-500'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>Needs Remediation ({activeWrongQuestions.length})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSubTab('resolved');
                setSelectedChapterId('all');
              }}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors ${
                subTab === 'resolved'
                  ? 'bg-emerald-600 text-white shadow-2xs dark:bg-emerald-500 dark:text-slate-950'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Resolved &amp; Mastered ({resolvedWrongQuestions.length})</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5">
              <Filter className="h-3.5 w-3.5 text-slate-400" />
              <select
                value={selectedChapterId}
                onChange={(e) => setSelectedChapterId(e.target.value)}
                aria-label="Filter wrong questions by chapter"
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 focus:border-teal-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <option value="all">All Chapters ({sourceList.length})</option>
                {availableChapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.label} ({ch.count})
                  </option>
                ))}
              </select>
            </div>

            {subTab === 'active' && filteredList.length > 0 && (
              <button
                type="button"
                onClick={toggleBlindRetryAll}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-teal-500 dark:hover:text-slate-950"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>
                  {filteredList.some((q) => blindRetryIds[q.id])
                    ? 'Show Previous Answers & Keys'
                    : 'Blind Retry All (Hide Keys)'}
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Empty State */}
      {filteredList.length === 0 ? (
        <div className="rounded-2xl border border-slate-200/90 bg-white p-12 text-center shadow-2xs dark:border-slate-800/90 dark:bg-slate-900">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
          <h2 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
            {subTab === 'active'
              ? 'Zero Active Wrong Questions!'
              : 'No Resolved Questions in This Filter Yet'}
          </h2>
          <p className="mx-auto mt-1.5 max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm dark:text-slate-400">
            {subTab === 'active'
              ? 'You have resolved all wrong answers in your queue. Continue practicing across the 17 chapters or take a 60-minute simulated exam.'
              : 'Answer any active wrong question correctly to move it into your Resolved & Mastered collection.'}
          </p>
          <button
            type="button"
            onClick={() => onSelectChapter('ch1')}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950"
          >
            <BookOpen className="h-4 w-4" />
            <span>Practice Chapters Bank</span>
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredList.map((q) => {
            const attempt = attempts[q.id];
            const ch = CHAPTERS_BY_ID[q.chapterId];
            const isBlind = Boolean(blindRetryIds[q.id]);

            return (
              <article
                key={q.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs dark:border-slate-800/90 dark:bg-slate-900"
              >
                {/* Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <button
                      type="button"
                      onClick={() => onSelectChapter(q.chapterId)}
                      className="font-mono font-bold text-teal-700 hover:underline dark:text-teal-400"
                    >
                      CH {String(q.chapterNumber).padStart(2, '0')}:{' '}
                      {ch?.shortTitle ?? q.chapterId}
                    </button>
                    <span>·</span>
                    <span className="font-mono font-semibold text-slate-900 dark:text-white">
                      Q#{q.questionLabel ?? q.questionNumber}
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
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                    >
                      <FileText className="h-3 w-3" />
                      PDF p.{q.pdfPage}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {attempt && (
                      <span className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                        Missed {attempt.wrongCount}×
                      </span>
                    )}

                    {subTab === 'active' && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setBlindRetryIds((prev) => ({
                              ...prev,
                              [q.id]: !prev[q.id],
                            }))
                          }
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <RotateCcw className="h-3 w-3" />
                          <span>{isBlind ? 'Show Key' : 'Retry Blind'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onMarkResolved(q.id)}
                          className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 dark:border-emerald-900/60 dark:bg-emerald-950/50 dark:text-emerald-300"
                        >
                          <Check className="h-3 w-3" />
                          <span>Mark Mastered</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Question Stem */}
                <h3 className="mt-4 font-sans text-base leading-relaxed font-semibold text-slate-900 sm:text-lg dark:text-slate-100">
                  {q.stem}
                </h3>

                {/* Options */}
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {q.options.map((opt) => {
                    const isSelected = attempt?.selectedOption === opt.key;
                    const isRight = isAnswerCorrect(q, opt.key);

                    let optionStyle =
                      'border-slate-200/90 bg-slate-50/60 text-slate-800 hover:border-teal-500/60 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200';

                    if (!isBlind) {
                      if (isRight) {
                        optionStyle =
                          'border-emerald-500/80 bg-emerald-50/80 text-emerald-950 dark:border-emerald-500/70 dark:bg-emerald-950/40 dark:text-emerald-100';
                      } else if (isSelected && !isRight) {
                        optionStyle =
                          'border-rose-500/80 bg-rose-50/80 text-rose-950 dark:border-rose-500/70 dark:bg-rose-950/40 dark:text-rose-100';
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => {
                          onRetryAnswer(q, opt.key);
                          if (isBlind) {
                            setBlindRetryIds((prev) => ({
                              ...prev,
                              [q.id]: false,
                            }));
                          }
                        }}
                        className={`flex items-start justify-between gap-3 rounded-xl border p-3.5 text-left text-sm transition-all ${optionStyle}`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold uppercase ${
                              !isBlind && isRight
                                ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950'
                                : !isBlind && isSelected && !isRight
                                ? 'bg-rose-600 text-white dark:bg-rose-500'
                                : 'bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="pt-0.5 leading-snug font-medium">
                            {opt.text}
                          </span>
                        </div>

                        {!isBlind && isRight && (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        )}
                        {!isBlind && isSelected && !isRight && (
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence initial={false}>
                  {!isBlind && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-xl border border-teal-200/80 bg-teal-50/50 p-4 dark:border-teal-900/60 dark:bg-teal-950/30">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <span className="flex items-center gap-1.5 font-bold text-teal-800 dark:text-teal-300">
                            <Sparkles className="h-3.5 w-3.5" />
                            Correct Answer Key:{' '}
                            <span className="font-mono uppercase">{q.correctOption}</span>
                          </span>
                          {attempt && !attempt.isCorrect && (
                            <span className="font-mono text-rose-600 dark:text-rose-400">
                              Your Previous Choice: {attempt.selectedOption.toUpperCase()} · Click option{' '}
                              {q.correctOption.toUpperCase()} above to resolve
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
    </div>
  );
}
