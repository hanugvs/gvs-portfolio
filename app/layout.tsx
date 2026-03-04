import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'Vannur Frontend / Full Stack Developer',
  description:
    'Showcasing my skills, experience, and projects as a Senior Frontend / Full Stack Developer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-gray-900 text-white">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="h-16" />
        {children}
      </body>
    </html>
  );
}
