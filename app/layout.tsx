import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'BioMed 102 — Dr. Hesham Esmat Biochemistry MCQ Bank & Exam Simulator',
  description:
    'Interactive Biochemistry Module 102 MCQ Bank, Chapter Analytics Dashboard, Wrong Answer Remediation Hub, and 60-Minute Exam Simulator based on Dr. Hesham Esmat’s curriculum.',
  openGraph: {
    title: 'BioMed 102 — Dr. Hesham Esmat Biochemistry MCQ Bank & Exam Simulator',
    description:
      'Interactive Biochemistry Module 102 MCQ Bank, Chapter Analytics Dashboard, Wrong Answer Remediation Hub, and 60-Minute Exam Simulator based on Dr. Hesham Esmat’s curriculum.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioMed 102 — Dr. Hesham Esmat Biochemistry MCQ Bank & Exam Simulator',
    description:
      'Interactive Biochemistry Module 102 MCQ Bank, Chapter Analytics Dashboard, Wrong Answer Remediation Hub, and 60-Minute Exam Simulator based on Dr. Hesham Esmat’s curriculum.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-teal-500/20 selection:text-teal-700 dark:selection:text-teal-300 transition-colors duration-200"
      >
        {children}
      </body>
    </html>
  );
}
