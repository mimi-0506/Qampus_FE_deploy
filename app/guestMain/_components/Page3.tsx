'use client';

import Image from 'next/image';
// import LeftArrow from './left_arrow.svg'; //왜 안되지..
// import RightArrow from './right_arrow.svg';

export default function Page3() {
  return (
    <div className="relative flex h-fit w-screen flex-col items-center justify-center">
      <Image
        src="/images/main/gradient_page3.png"
        width={1810}
        height={880}
        alt=""
        className="absolute left-[100px] top-[-100px] z-0"
      />

      <div className="relative z-10 mt-[100px] flex flex-col items-center justify-center">
        <div className="mb-[36px] text-[36px] font-semibold">
          모르는 내용을 자유롭게 질문하고 답변해요
        </div>
        <div className="overflow-hidden rounded-[36px]">
          {/* <LeftArrow /> */}
          <Image
            className="bg-white"
            src="/images/main/introduce_1.png"
            width={750}
            height={550}
            alt=""
          />

          {/* <RightArrow /> */}
        </div>
      </div>
      <div className="mb-[400px]">
        <div className="bg-mainlight flex h-[203px] w-[781px] flex-col items-center justify-center rounded-[36px]">
          <h2>금주의 인기 질문과 답변</h2>
          <p>
            에서는 매주 사용자에게 인기 질문과 답변들을 선별해서 제공해요.
            <br /> 인기 질문은 조회 수와 나도 궁금해요 수로, 답변은 좋아요 수로
            선별돼요.
          </p>
        </div>
      </div>
    </div>
  );
}
