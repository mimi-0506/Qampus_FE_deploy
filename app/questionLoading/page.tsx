'use client';

import Image from 'next/image';
import ProgressBar from './_components/ProgressBar';

export default function QuestionLoading() {
  return (
    <main
      className="h-[calc(100vh-80px)] w-screen bg-white flex flex-col items-center justify-center bg-center"
      style={{
        backgroundImage: `url('/images/question/question_loading_bg.png')`,
        backgroundSize: '68%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Image
        src="/images/characters/grin.png"
        alt="grin icon"
        width={300}
        height={300}
      />
      <p className="text-[#3765D6] text-3xl font-[600] mt-10">
        질문을 등록 중입니다
      </p>
      <p className="text-[#606060] text-lg mt-2">잠시만 기다려주세요...</p>
      <ProgressBar />
    </main>
  );
}
