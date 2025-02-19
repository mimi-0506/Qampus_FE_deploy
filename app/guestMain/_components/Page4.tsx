'use client';

import Image from 'next/image';
import useScrollAnimation from './useScrollAnimation';

export default function Page4() {
  const {ref, isVisible} = useScrollAnimation();

  return (
    <div className="relative flex aspect-[16/9] w-screen items-center justify-center rounded-tl-[4.17vw] rounded-tr-[4.17vw] bg-black text-white">
      <div className="absolute left-[6.25vw] top-[8.85vw]">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          Answer collection
        </div>
        <h2 className="text-[1.46vw]">내가 받은 답변</h2>
      </div>

      <div className="flex w-screen items-center justify-around">
        <div className="w-[14vw] aspect-[275/204]">
          <Image
            src="/images/main/bubbles.png"
            width={275}
            height={204}
            alt="bubble"
          />
        </div>
        <div
          ref={ref}
          className={`text-[1.87vw] transition-all duration-700 ease-out transform ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
        >
          Qampus에서는 자신이 질문한 내용에 달린 답변들을 모아서 확인할 수
          있어요
          <br />
          지금까지 모인 답변들을 확인해볼까요?
        </div>
      </div>
    </div>
  );
}
