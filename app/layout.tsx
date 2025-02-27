import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import localFont from 'next/font/local';
import {InfoStoreProvider} from '@/providers/store-provider';

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
        <InfoStoreProvider>
          <Header />
          <main className="flex-grow pt-[80px]">{children}</main>
          <Footer />
        </InfoStoreProvider>
      </body>
    </html>
  );
}
