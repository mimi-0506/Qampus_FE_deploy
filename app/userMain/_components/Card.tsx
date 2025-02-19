'use client';
import {Dispatch, SetStateAction} from 'react';
import Image from 'next/image';

export default function Card({
  index,
  open,
  setNowOpen,
}: {
  index: number;
  open: boolean;
  setNowOpen: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div
      className={`relative transition-all duration-500 ease-in-out  
      ${open ? 'w-[26.3vw]' : 'w-[18vw] '} h-[31.7vw]
      rounded-[1.77vw] box-border overflow-visible`}
    >
      <Image
        src={`/images/user/bg_${open ? 'open' : 'close'}.png`}
        fill
        alt="bg"
        className="transition-opacity duration-500 ease-in-out"
      />

      <div className="overflow-hidden w-full h-full absolute top-0 left-0">
        <Image
          src={`/images/user/number_${index}_${open ? 'open' : 'close'}.png`}
          width={index === 1 ? 177 : 283}
          height={133}
          alt="number"
          className={`absolute transition-all duration-500 ease-in-out 
         ${index === 1 ? 'aspect-[177/133]' : 'aspect-[283/133]'} 
         ${index === 1 ? 'w-[9.2vw]' : 'w-[14.7vw]'} bottom-[-2vw] z-0
         ${open ? 'left-[1.6vw]' : index === 1 ? 'left-[4vw]' : 'left-[1.5vw]'}`}
        />
      </div>

      <div
        className={`absolute w-full h-full top-0 box-border z-10
        transition-opacity duration-500 ease-in-out 
        ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <Image
          src={`/images/user/medal_${index}.png`}
          width={73}
          height={73}
          alt="medal"
          className="absolute w-[3.8vw] aspect-[1/1] left-[-1.5vw] top-[-1.5vw]"
        />
        <div className="w-full h-full py-[3vw] px-[1.6vw]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="w-[11.25vw] text-[1vw] aspect-[216/38] text-grey2 border border-grey2 rounded-[14.8vw] flex justify-center items-center">
                경희대학교 환경공학과
              </div>
              <div className="mt-[1vw] ml-[1.2vw] text-[0.7vw]">
                조회 1285회 · 나도 궁금해요 295개
              </div>
            </div>
          </div>
          <div className="mt-[4vw] gap-[0.8vw] flex text-[1.04vw] items-start">
            <Image src="/svg/q.svg" width={29} height={29} alt="q" />
            <div>
              지속 가능한 환경 기술을 개발할 때 경제적 타당성과 환경적 이점을
              동시에 충족시키는 방법은 뭔가요?
            </div>
          </div>
        </div>
      </div>

      <button
        className="w-[4.5vw] h-[4.5vw] absolute right-[1.6vw] top-[3.1vw] z-10"
        onClick={() => setNowOpen(open ? 0 : index)}
      >
        <div className="relative w-full h-full">
          <Image
            src={`/images/user/arrow_${open ? 'open' : 'close'}.png`}
            fill
            alt="arrow button"
            className="transition-transform duration-500 ease-in-out 
            transform rotate-0"
          />
        </div>
      </button>
    </div>
  );
}
