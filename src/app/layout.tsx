import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Youth Light Learning Zone · CMB Youth Light',
  description:
    'Affordable, quality tuition for Grades 7–11 — specially designed for students who struggle with basics and those who can\'t afford private tuition. A CMB Youth Light × YFC Sri Lanka Initiative.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
