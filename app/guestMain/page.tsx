'use client';

import Page1 from './_components/Page1';
import Page2 from './_components/Page2';

import dynamic from 'next/dynamic';

const Page3 = dynamic(() => import('./_components/Page3'), {ssr: false});
const Page4 = dynamic(() => import('./_components/Page4'), {ssr: false});
const Page5 = dynamic(() => import('./_components/Page5'), {ssr: false});
const Page6 = dynamic(() => import('./_components/Page6'), {ssr: false});
const Page7 = dynamic(() => import('./_components/Page7'), {ssr: false});

export default function GuestMainPage() {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </>
  );
}
