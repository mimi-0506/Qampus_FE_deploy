import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/layout/Header';

import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
import {Toaster} from 'react-hot-toast';

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
});

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Qapus',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        <Header />
        <main className="flex-grow pt-[80px]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
