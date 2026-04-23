import './globals.css';

export const metadata = {
  title: {
    default: 'Haris Ali | Full-Stack & Mobile App Developer',
    template: '%s | CodeWithHaris',
  },
  description: 'Haris Ali is a full-stack developer from Pakistan specializing in React, Next.js, React Native, Node.js. Building fast modern web and mobile apps for clients worldwide.',
  keywords: [
    'Next.js developer',
    'React developer',
    'React Native developer',
    'Full-stack developer Pakistan',
    'Mobile app developer',
    'Web developer Pakistan',
    'CodeWithHaris',
    'freelance developer',
  ],
  authors: [{ name: 'Haris Ali' }],
  creator: 'Haris Ali',
  metadataBase: new URL('https://harisdev.online'),
  alternates: {
    canonical: 'https://harisdev.online',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harisdev.online',
    siteName: 'CodeWithHaris',
    title: 'Haris Ali | Full-Stack & Mobile App Developer',
    description: 'Building fast modern web and mobile apps with React, Next.js and React Native.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CodeWithHaris - Haris Ali' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haris Ali | Full-Stack & Mobile App Developer',
    description: 'Building fast modern web and mobile apps with React, Next.js and React Native.',
    images: ['/og-image.png'],
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}