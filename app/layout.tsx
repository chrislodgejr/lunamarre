import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luna Marre | Agave, Corn & Fire',
  description: 'A cinematic restaurant website for Luna Marre, built around its red-and-agave menu identity.',
  metadataBase: new URL('https://lunamarre.com'),
  openGraph: {
    title: 'Luna Marre',
    description: 'Hand-pressed tortillas, agave, corn, fire, and refined coastal Mexican plates.',
    images: ['/og.svg']
  }
};

export const viewport: Viewport = {
  themeColor: '#dd2d25'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
