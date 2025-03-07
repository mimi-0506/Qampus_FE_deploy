import Link from 'next/link';
import Background from './Background';
import BottomAnimation from './BottomAnimation';
import Image from 'next/image';

export default function Page1() {
  return (
    <div className="flex flex-col relative aspect-[16/9] z-0 w-screen items-center overflow-hidden">
      <Background />

      <div className="relative w-[21vw] mt-[13vw] aspect-[402/405]">
        <Image src="/images/characters/wink.png" alt="character" fill />
      </div>

      <Link
        href="/login"
        className="bg-dark2 mt-[3vw] relative z-10 flex w-[21vw] aspect-[404/60] items-center justify-center text-[1.25vw] font-semibold rounded-[0.9vw] text-white "
      >
        질문 시작하기
      </Link>

      <div className="bg-mainlight absolute bottom-0   bg-page1anibg flex h-[7%] w-full justify-start text-[3%] font-bold">
        <BottomAnimation />
        끊김테스트
        <BottomAnimation />
      </div>
    </div>
  );
}
