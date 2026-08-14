import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import { LenisProvider } from '@/components/LenisProvider';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Geethma Nirmani — Creative × Technology × Business Portfolio',
  description: 'Immersive personal portfolio website of Geethma Nirmani, pursuing a B.Sc. (Hons) in Management and Information Technology. Exploring creativity, technology, and business analysis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
