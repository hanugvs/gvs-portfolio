import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'G. Vannur — Senior Frontend / Full Stack Engineer',
  description:
    'G. Vannur — Senior Frontend / Full Stack Engineer. Building scalable banking, enterprise & AI-powered web applications.',
  keywords: [
    'G. Vannur',
    'Frontend Developer',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
  ],
  authors: [{ name: 'G. Vannur', url: 'mailto:gvs1.dev@gmail.com' }],
  openGraph: {
    title: 'G. Vannur — Senior Developer Portfolio',
    description:
      'Explore projects, experience and skills focused on banking, enterprise and AI integrations.',
    url: 'https://yourwebsite.com',
    siteName: 'G. Vannur Portfolio',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'G. Vannur Portfolio Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    title: 'Senior Developer Portfolio',
    description:
      'Explore my projects and skills as a Senior Frontend / Full Stack Developer.',
    images: ['https://yourwebsite.com/og-image.png'],
  },
};
