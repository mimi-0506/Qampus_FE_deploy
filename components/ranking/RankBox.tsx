'use client';

import {Dispatch, SetStateAction} from 'react';
import {motion} from 'motion/react';
import {rankType, universityType} from '@/type';

export default function RankBox({
  mode = false,
  universities,
  rankStandard,
  setRankStandard,
  isVisible,
}: {
  mode?: boolean;
  universities: universityType[];
  rankStandard?: rankType;
  setRankStandard?: Dispatch<SetStateAction<rankType>>;
  isVisible: boolean;
}) {
  return (
    <>
      {/* absolute  */}
      <div
        className={`pt-[1.875vw]  mr-[8.85vw] px-[1.2vw] box-border h-[23.1vw] w-[17.2vw] text-white 
  bg-[url('/images/main/box3_page5.webp')] 
  bg-contain bg-no-repeat
   opacity-0 ${isVisible ? 'animate-fadeIn' : ''}
  `}
      >
        <div className="absolute right-0">
          {mode && (
            <div className="relative top-[-5vw] flex items-center bg-black px-[0.2vw] py-[0.1vw] rounded-full w-[6vw] aspect-[117/47] text-[0.88vw] ">
              <motion.div
                className="absolute w-[3vw] aspect-[58/39] bg-gray-700 rounded-full"
                initial={{x: 0}}
                animate={{x: rankStandard === 'weekly' ? 0 : '2.5vw'}}
                transition={{type: 'spring', stiffness: 300, damping: 20}}
              />
              <button
                className={`relative z-10 flex-1 text-white py-2 rounded-full text-center ${
                  rankStandard === 'weekly' ? 'font-bold' : 'text-gray-400'
                }`}
                onClick={() => {
                  if (setRankStandard) setRankStandard('weekly');
                }}
              >
                주간
              </button>
              <button
                className={`relative z-10 flex-1 text-white py-2 rounded-full text-center ${
                  rankStandard === 'monthly' ? 'font-bold' : 'text-gray-400'
                }`}
                onClick={() => {
                  if (setRankStandard) setRankStandard('monthly');
                }}
              >
                월간
              </button>
            </div>
          )}
        </div>

        <h2 className="w-full text-center text-[1vw] font-semibold">
          {rankStandard === 'weekly' ? '주간' : '월간'} 순위
        </h2>
        <ul className="mt-[1vw] mb-[3.2vw] text-[0.83vw]">
          {universities.map((university: universityType, index) => (
            <li
              key={index}
              className={`flex items-center py-[1vw] border-b border-gray-700 last:border-b-0
       ${index === 2 || (index === 3 && 'text-grey4')}   
         ${index === 4 && 'text-grey3'}   
      `}
            >
              <span className="">{index + 1}</span>
              <span className="ml-[1.3vw]">{university?.university_name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
