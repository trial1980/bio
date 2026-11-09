'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar, NavTab } from '@/components/Navbar';
import { DashboardView } from '@/components/DashboardView';
import { ChapterPracticeView } from '@/components/ChapterPracticeView';
import { WrongAnswersView } from '@/components/WrongAnswersView';
import { ExamSimulatorView } from '@/components/ExamSimulatorView';
import { PdfReferenceModal } from '@/components/PdfReferenceModal';
import {
  ExamSessionResult,
  OptionKey,
  PdfSourceId,
  Question,
  UserProgressState,
} from '@/lib/types';
import {
  applyExamToProgress,
  calculateOverallAnalytics,
  createInitialProgressState,
  getWrongQuestions,
  recordQuestionAttempt,
  removeFromWrongBank,
  resetChapterProgress,
  toggleBookmark,
} from '@/lib/quiz-engine';

const STORAGE_KEY_PROGRESS = 'biomed_mcq_progress_v4_full_2003';
const STORAGE_KEY_THEME = 'biomed102_theme_v1';

export default function BioMed102App() {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [progressState, setProgressState] = useState<UserProgressState>(() =>
    createInitialProgressState(true)
  );
  const [isHydrated, setIsHydrated] = useState(false);

  // Exam inspection & autostart state
  const [reviewExamFromDashboard, setReviewExamFromDashboard] =
    useState<ExamSessionResult | null>(null);
  const [autoStartExam, setAutoStartExam] = useState(false);

  // PDF Viewer Modal state
  const [pdfModal, setPdfModal] = useState<{
    isOpen: boolean;
    pdfSource: PdfSourceId;
    page: number;
    title: string;
  }>({
    isOpen: false,
    pdfSource: 'module102',
    page: 2,
    title: 'Medical MCQ Bank — Original Source PDFs',
  });

  // Load saved state & URL parameters on mount
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        const savedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
        if (savedProgress) {
          const parsed = JSON.parse(savedProgress) as UserProgressState;
          if (parsed && parsed.attempts && Array.isArray(parsed.examHistory)) {
            setProgressState(parsed);
          }
        }
        const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
        if (savedTheme === 'dark') {
          setIsDark(true);
          document.documentElement.classList.add('dark');
        } else {
          setIsDark(false);
          document.documentElement.classList.remove('dark');
        }

        // Check URL query parameters for deterministic testing / deep links
        const params = new URLSearchParams(window.location.search);
        const tabParam = params.get('tab') as NavTab | null;
        if (
          tabParam &&
          ['dashboard', 'chapters', 'wrong', 'exam'].includes(tabParam)
        ) {
          setActiveTab(tabParam);
        }
        const chapterParam = params.get('chapter');
        if (chapterParam) {
          setProgressState((prev) => ({
            ...prev,
            lastActiveChapterId: chapterParam,
          }));
        }
        if (params.get('autostart') === '1') {
          setActiveTab('exam');
          setAutoStartExam(true);
        }
      } catch {
        // Ignore storage errors in restricted environments
      } finally {
        setIsHydrated(true);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  // Persist progress state changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progressState));
    } catch {
      // Ignore quota errors
    }
  }, [progressState, isHydrated]);

  const handleToggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      try {
        localStorage.setItem(STORAGE_KEY_THEME, next ? 'dark' : 'light');
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const overallAnalytics = useMemo(
    () => calculateOverallAnalytics(progressState),
    [progressState]
  );

  const wrongQuestionsLists = useMemo(
    () => getWrongQuestions(progressState),
    [progressState]
  );

  const handleAnswerQuestion = useCallback(
    (question: Question, selectedOption: OptionKey) => {
      setProgressState((prev) =>
        recordQuestionAttempt(prev, question, selectedOption)
      );
    },
    []
  );

  const handleToggleBookmark = useCallback((questionId: string) => {
    setProgressState((prev) => toggleBookmark(prev, questionId));
  }, []);

  const handleResetChapter = useCallback((chapterId: string) => {
    setProgressState((prev) => resetChapterProgress(prev, chapterId));
  }, []);

  const handleMarkResolvedFromWrongBank = useCallback((questionId: string) => {
    setProgressState((prev) => removeFromWrongBank(prev, questionId));
  }, []);

  const handleCompleteExam = useCallback((result: ExamSessionResult) => {
    setProgressState((prev) => applyExamToProgress(prev, result));
    setAutoStartExam(false);
  }, []);

  const handleSelectChapterAndNavigate = useCallback((chapterId: string) => {
    setProgressState((prev) => ({
      ...prev,
      lastActiveChapterId: chapterId,
    }));
    setActiveTab('chapters');
  }, []);

  const handleInspectPastExam = useCallback((exam: ExamSessionResult) => {
    setReviewExamFromDashboard(exam);
    setActiveTab('exam');
  }, []);

  const handleOpenPdfAtPage = useCallback(
    (pdfSource: PdfSourceId, page: number, title: string) => {
      setPdfModal({
        isOpen: true,
        pdfSource,
        page,
        title,
      });
    },
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab !== 'exam') {
            setReviewExamFromDashboard(null);
            setAutoStartExam(false);
          }
          setActiveTab(tab);
        }}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        overallProgressPercent={overallAnalytics.progressionPercentage}
        activeWrongCount={overallAnalytics.activeWrongCount}
        onOpenPdfModal={() =>
          setPdfModal((prev) => ({
            ...prev,
            isOpen: true,
          }))
        }
      />

      <main className="pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {activeTab === 'dashboard' && (
              <DashboardView
                analytics={overallAnalytics}
                examHistory={progressState.examHistory}
                lastActiveChapterId={progressState.lastActiveChapterId}
                onSelectChapter={handleSelectChapterAndNavigate}
                onGoToWrongBank={() => setActiveTab('wrong')}
                onStartExamSimulator={() => {
                  setReviewExamFromDashboard(null);
                  setActiveTab('exam');
                }}
                onInspectPastExam={handleInspectPastExam}
                onOpenPdfAtPage={handleOpenPdfAtPage}
                onResetAllProgress={() =>
                  setProgressState(createInitialProgressState(false))
                }
                onRestoreDemoProgress={() =>
                  setProgressState(createInitialProgressState(true))
                }
              />
            )}

            {activeTab === 'chapters' && (
              <ChapterPracticeView
                activeChapterId={progressState.lastActiveChapterId || 'ch1'}
                onSelectChapter={(chId) =>
                  setProgressState((prev) => ({
                    ...prev,
                    lastActiveChapterId: chId,
                  }))
                }
                chapterAnalyticsList={overallAnalytics.chapterAnalytics}
                attempts={progressState.attempts}
                bookmarks={progressState.bookmarks}
                onAnswerQuestion={handleAnswerQuestion}
                onToggleBookmark={handleToggleBookmark}
                onResetChapter={handleResetChapter}
                onOpenPdfAtPage={handleOpenPdfAtPage}
              />
            )}

            {activeTab === 'wrong' && (
              <WrongAnswersView
                activeWrongQuestions={wrongQuestionsLists.active}
                resolvedWrongQuestions={wrongQuestionsLists.resolved}
                attempts={progressState.attempts}
                onRetryAnswer={handleAnswerQuestion}
                onMarkResolved={handleMarkResolvedFromWrongBank}
                onSelectChapter={handleSelectChapterAndNavigate}
                onOpenPdfAtPage={handleOpenPdfAtPage}
              />
            )}

            {activeTab === 'exam' && (
              <ExamSimulatorView
                key={`${reviewExamFromDashboard?.id ?? 'new'}-${autoStartExam}`}
                examHistory={progressState.examHistory}
                initialReviewExam={reviewExamFromDashboard}
                onClearInitialReviewExam={() => setReviewExamFromDashboard(null)}
                onCompleteExam={handleCompleteExam}
                onGoToWrongBank={() => setActiveTab('wrong')}
                onOpenPdfAtPage={handleOpenPdfAtPage}
                autoStartExam={autoStartExam}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <PdfReferenceModal
        isOpen={pdfModal.isOpen}
        onClose={() => setPdfModal((prev) => ({ ...prev, isOpen: false }))}
        pdfSource={pdfModal.pdfSource}
        page={pdfModal.page}
        title={pdfModal.title}
        onChangePdfSource={(source, defaultPage = 1) =>
          setPdfModal((prev) => ({
            ...prev,
            pdfSource: source,
            page: defaultPage,
          }))
        }
        onChangePage={(page) => setPdfModal((prev) => ({ ...prev, page }))}
      />
    </div>
  );
}
