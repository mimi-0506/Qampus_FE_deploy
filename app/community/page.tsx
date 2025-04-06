'use client';

import dynamic from 'next/dynamic';
import Info from './_component/Info';

const UnivMap = dynamic(() => import('./_component/UnivMapArea'), {
  ssr: false,
});

export default function CommunityPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Info />
      <UnivMap />
    </main>
  );
}
