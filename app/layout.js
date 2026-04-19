import './globals.css';

export const metadata = {
  title: 'Build something great! - Code With Haris',
  description: 'Build something great!',
  keywords: 'CodeWithHaris,Code With Haris,Haris Ali,App Development,Web Development,Next.js,React,React Native,Expo,TypeScript',
  authors: [{ name: 'Haris Ali' }],
  openGraph: {
    title: 'Code With Haris',
    description: 'Build something great!',
    url: 'https://harisdev.online',
    siteName: 'Code With Haris',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code With Haris',
    description: 'Master React Native by building professional projects from Code With Haris.',
    creator: '@codewithharis_',
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
