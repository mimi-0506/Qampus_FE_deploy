'use client';

import Image from 'next/image';
// import LeftArrow from './left_arrow.svg'; //왜 안되지..
// import RightArrow from './right_arrow.svg';

export default function Page3() {
  return (
    <div className="relative  w-screen h-fit flex flex-col justify-center items-center">
      <Image
        src="/images/main/gradient_page3.png"
        width={1810}
        height={880}
        alt=""
        className="absolute top-[-100px] left-[100px] z-0"
      />

      <div
        className="
    relative z-10
      flex flex-col justify-center items-center mt-[100px]"
      >
        <div className="text-[36px] font-semibold mb-[36px]">
          모르는 내용을 자유롭게 질문하고 답변해요
        </div>
        <div className="rounded-[36px] overflow-hidden">
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
        <div
          className="w-[781px] h-[203px]
        flex flex-col
        justify-center
        items-center
        bg-mainlight rounded-[36px]
   
        "
        >
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
