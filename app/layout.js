import './globals.css';

export const metadata = {
  title: {
    default: 'Haris Ali | Full-Stack Developer',
    template: '%s | CodeWithHaris',
  },
  description: 'I build fast, modern web apps using Next.js, React and Node.js. Based in Pakistan.',
  keywords: ['Next.js developer', 'React developer', 'Full-stack developer Pakistan', 'CodeWithHaris'],
  authors: [{ name: 'Haris Ali' }],
  creator: 'Haris Ali',
  metadataBase: new URL('https://www.harisdev.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.harisdev.online',
    siteName: 'CodeWithHaris',
    title: 'Haris Ali | Full-Stack Developer',
    description: 'I build fast, modern web apps using Next.js, React and Node.js.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CodeWithHaris' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haris Ali | Full-Stack Developer',
    description: 'I build fast, modern web apps using Next.js, React and Node.js.',
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
