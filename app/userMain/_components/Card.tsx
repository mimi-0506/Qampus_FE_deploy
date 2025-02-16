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
      ${open ? 'w-[26.3vw]' : 'w-[18vw]'} h-[31.7vw]
      rounded-[1.77vw] bg-main box-border py-[3vw] px-[1.6vw]`}
    >
      {open ? (
        <>
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
          <div className="mt-[4vw] gap-[0.8vw] flex text-[1.04vw]">
            <Image src="/svg/q.svg" width={29} height={29} alt="q" />
            <div>
              지속 가능한 환경 기술을 개발할 때 경제적 타당성과 환경적 이점을
              동시에 충족시키는 방법은 뭔가요?
            </div>
          </div>
        </>
      ) : null}

      <button
        className="w-[4.5vw] h-[4.5vw] bg-black absolute right-0 top-0"
        onClick={() => {
          setNowOpen(open ? 0 : index);
        }}
      />
    </div>
  );
}
