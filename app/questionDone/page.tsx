'use client';

import SearchBar from '@/components/SearchBar';
import ViewQuestion from '@/components/ViewQuestion';
import {useRouter} from 'next/navigation';

export default function QuestionDonePage() {
  const router = useRouter();

  return (
    <main className="flex w-full h-[calc(100vh-80px)] bg-white flex-col items-center ">
      <SearchBar />
      <ViewQuestion />

      <div className="mt-10 flex justify-center">
        <p
          className="pt-6 md:pt-10 cursor-pointer text-[#333333] text-sm md:text-base border-b border-[#333333]"
          onClick={() => router.push('/questionCreate')}
        >
          추가 질문하기
        </p>
      </div>
    </main>
  );
}
