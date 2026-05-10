import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sparktalks.id'),
  title: 'SPARK Talks — Where Confidence Begins',
  description: 'More than public speaking — a space to build confidence, communication, and growth. Online & offline programs by Salmahita Ataya Pradilla.',
  keywords: ['public speaking', 'confidence building', 'speaking course', 'SPARK Talks', 'Salmahita'],
  openGraph: {
    title: 'SPARK Talks — Where Confidence Begins',
    description: 'More than public speaking — a space to build confidence, communication, and growth.',
    images: ['/og-image.jpg'],
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${poppins.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
