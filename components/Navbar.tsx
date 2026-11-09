'use client';

import React from 'react';
import {
  BarChart3,
  BookOpen,
  AlertTriangle,
  Timer,
  FileText,
  Sun,
  Moon,
  Dna,
} from 'lucide-react';
import { motion } from 'motion/react';

export type NavTab = 'dashboard' | 'chapters' | 'wrong' | 'exam';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  overallProgressPercent: number;
  activeWrongCount: number;
  onOpenPdfModal: () => void;
}

export function Navbar({
  activeTab,
  onSelectTab,
  isDark,
  onToggleTheme,
  overallProgressPercent,
  activeWrongCount,
  onOpenPdfModal,
}: NavbarProps) {
  const navItems: {
    id: NavTab;
    label: string;
    shortLabel: string;
    icon: React.ComponentType<{ className?: string }>;
    counter?: string | number;
    counterTone?: 'default' | 'rose' | 'teal';
  }[] = [
    {
      id: 'dashboard',
      label: 'Dashboard & Analytics',
      shortLabel: 'Dashboard',
      icon: BarChart3,
      counter: `${overallProgressPercent}%`,
      counterTone: 'teal',
    },
    {
      id: 'chapters',
      label: 'Chapters Bank',
      shortLabel: 'Chapters',
      icon: BookOpen,
      counter: 17,
      counterTone: 'default',
    },
    {
      id: 'wrong',
      label: 'Wrong Questions',
      shortLabel: 'Wrong Bank',
      icon: AlertTriangle,
      counter: activeWrongCount,
      counterTone: activeWrongCount > 0 ? 'rose' : 'default',
    },
    {
      id: 'exam',
      label: 'Exam Simulator',
      shortLabel: '60Q Exam',
      icon: Timer,
      counter: '60m',
      counterTone: 'default',
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors duration-200 dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={() => onSelectTab('dashboard')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-600 text-white shadow-xs transition-transform duration-200 group-hover:scale-105 dark:bg-teal-500 dark:text-slate-950">
            <Dna className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-slate-50">
                BioMed 102
              </span>
              <span className="hidden text-xs font-medium text-teal-700 sm:inline dark:text-teal-400">
                · Dr. Hesham Esmat
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Biochemistry &amp; Molecular Biology MCQ Bank
            </p>
          </div>
        </button>

        {/* Primary Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-xl border border-slate-200/90 bg-slate-100/80 p-1 md:flex dark:border-slate-800 dark:bg-slate-900/90"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-150 lg:text-sm ${
                  isActive
                    ? 'text-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-tab"
                    className="absolute inset-0 rounded-lg border border-slate-200/80 bg-white shadow-xs dark:border-slate-700/80 dark:bg-slate-800"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon
                    className={`h-4 w-4 ${
                      isActive
                        ? 'text-teal-600 dark:text-teal-400'
                        : item.counterTone === 'rose'
                        ? 'text-rose-500 dark:text-rose-400'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.counter !== undefined && (
                    <span
                      className={`font-mono text-[11px] tabular-nums ${
                        item.counterTone === 'rose'
                          ? 'font-bold text-rose-600 dark:text-rose-400'
                          : item.counterTone === 'teal'
                          ? 'font-bold text-teal-600 dark:text-teal-400'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {item.counter}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Actions: Source PDF Viewer & Theme Switch */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            title="Open original Module 102 & Heme/Purine PDFs"
          >
            <FileText className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
            <span className="hidden sm:inline">Source PDFs</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark or light mode"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-100/90 px-3 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-200/80 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isDark ? (
              <>
                <Sun className="h-4 w-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="flex items-center justify-around border-t border-slate-200/70 bg-slate-50/90 px-2 py-1.5 md:hidden dark:border-slate-800/70 dark:bg-slate-900/90">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg py-1.5 text-[11px] font-medium transition-colors ${
                isActive
                  ? 'bg-white text-teal-700 shadow-2xs dark:bg-slate-800 dark:text-teal-400'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-1">
                <Icon className="h-3.5 w-3.5" />
                {item.counter !== undefined && (
                  <span
                    className={`font-mono text-[10px] tabular-nums ${
                      item.counterTone === 'rose'
                        ? 'font-bold text-rose-600 dark:text-rose-400'
                        : 'opacity-80'
                    }`}
                  >
                    {item.counter}
                  </span>
                )}
              </div>
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Global Progression Bar Strip */}
      <div className="h-1 w-full bg-slate-200/70 dark:bg-slate-800/80">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 dark:from-teal-500 dark:via-teal-400 dark:to-emerald-400"
          initial={{ width: 0 }}
          animate={{ width: `${overallProgressPercent}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </header>
  );
}
