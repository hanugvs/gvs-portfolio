import '../styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://gvs-portfolio-nextjs.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'G. Vannur — Senior Frontend / Full Stack Engineer',
    template: '%s | G. Vannur',
  },
  description:
    'G. Vannur — Senior Frontend / Full Stack Engineer. Building scalable banking, enterprise & AI-powered web applications.',
  keywords: [
    'G. Vannur',
    'Frontend Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Angular',
    'Node.js',
    'Banking',
    'Enterprise',
  ],
  authors: [{ name: 'G. Vannur', url: 'mailto:gvs1.dev@gmail.com' }],
  creator: 'G. Vannur',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'G. Vannur — Senior Frontend / Full Stack Engineer',
    description:
      'Explore projects, experience and skills focused on banking, enterprise and AI integrations.',
    url: siteUrl,
    siteName: 'G. Vannur Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/my_photo.jpg',
        width: 800,
        height: 800,
        alt: 'G. Vannur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G. Vannur — Senior Frontend / Full Stack Engineer',
    description:
      'Building scalable banking, enterprise & AI-powered web applications.',
    images: ['/images/my_photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'G. Vannur',
  jobTitle: 'Senior Frontend / Full Stack Engineer',
  email: 'mailto:gvs1.dev@gmail.com',
  telephone: '+91-7019723240',
  url: siteUrl,
  sameAs: [],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan focus:px-3 focus:py-2 focus:text-sm focus:text-[#041018]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
