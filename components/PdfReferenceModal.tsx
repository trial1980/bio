'use client';

import React from 'react';
import { X, FileText, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { PDF_URLS } from '@/lib/questions';
import { PdfSourceId } from '@/lib/types';

interface PdfReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfSource: PdfSourceId;
  page: number;
  title: string;
  onChangePdfSource: (source: PdfSourceId, page?: number) => void;
  onChangePage: (page: number) => void;
}

export function PdfReferenceModal({
  isOpen,
  onClose,
  pdfSource,
  page,
  title,
  onChangePdfSource,
  onChangePage,
}: PdfReferenceModalProps) {
  if (!isOpen) return null;

  const baseUrl = PDF_URLS[pdfSource];
  const maxPage =
    pdfSource === 'module102'
      ? 106
      : pdfSource === 'anatomy_ul'
      ? 95
      : pdfSource === 'histology'
      ? 29
      : 9;
  const clampedPage = Math.min(Math.max(1, page), maxPage);
  const iframeSrc = `${baseUrl}#page=${clampedPage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Original Source PDF Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-xs sm:p-6"
    >
      <div className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-3.5 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <div>
              <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {title || 'Original Medical Source PDF Viewer'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct reference from attached Biochemistry, Anatomy &amp; Histology MCQ documents
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Switch between the 4 PDFs */}
            <div className="inline-flex flex-wrap rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-800 dark:bg-slate-950">
              <button
                type="button"
                onClick={() => onChangePdfSource('module102', 2)}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  pdfSource === 'module102'
                    ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Bio Mod 102 (Ch 1–15)
              </button>
              <button
                type="button"
                onClick={() => onChangePdfSource('heme_purine', 1)}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  pdfSource === 'heme_purine'
                    ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Heme &amp; Purine (Ch 16–17)
              </button>
              <button
                type="button"
                onClick={() => onChangePdfSource('anatomy_ul', 2)}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  pdfSource === 'anatomy_ul'
                    ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Anatomy UL (Ch 1–33)
              </button>
              <button
                type="button"
                onClick={() => onChangePdfSource('histology', 2)}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  pdfSource === 'histology'
                    ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Histology (Ch 1–4)
              </button>
            </div>

            {/* Page Stepper */}
            <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs dark:border-slate-800 dark:bg-slate-950">
              <button
                type="button"
                disabled={clampedPage <= 1}
                onClick={() => onChangePage(clampedPage - 1)}
                className="p-0.5 text-slate-600 hover:text-slate-900 disabled:opacity-40 dark:text-slate-300"
                aria-label="Previous PDF Page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono font-semibold tabular-nums text-slate-800 dark:text-slate-200">
                p. {clampedPage} / {maxPage}
              </span>
              <button
                type="button"
                disabled={clampedPage >= maxPage}
                onClick={() => onChangePage(clampedPage + 1)}
                className="p-0.5 text-slate-600 hover:text-slate-900 disabled:opacity-40 dark:text-slate-300"
                aria-label="Next PDF Page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <a
              href={baseUrl}
              download
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close PDF viewer"
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950">
          <iframe
            key={iframeSrc}
            src={iframeSrc}
            title={title || 'Biochemistry Module 102 PDF'}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
