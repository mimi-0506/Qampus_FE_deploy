'use client';

import SearchBar from '@/components/SearchBar';
import ViewQuestion from './_components/ViewQuestion';

export default function QuestionDonePage() {
  return (
    <main className="flex w-full h-[calc(100vh-80px)] bg-white flex-col items-center ">
      <SearchBar />
      <ViewQuestion />
    </main>
  );
}
