'use client';

import useScrollAnimation from '../useScrollAnimation';

export default function RightBox1() {
  const {ref, isVisible} = useScrollAnimation();
  const universities = [
    '경희대학교',
    '서강대학교',
    '홍익대학교',
    '건국대학교',
    '상명대학교',
  ];

  return (
    <>
      <div
        className={`absolute right-[8.85vw] pt-[1.875vw] px-[1.2vw] box-border h-[23.1vw] w-[17.2vw] text-white 
  bg-[url('/images/main/box3_page5.png')] 
  bg-contain bg-no-repeat
   opacity-0 ${isVisible ? 'animate-fadeIn' : ''}
  `}
      >
        <h2 className="w-full text-center text-[1vw] font-semibold">
          주간 순위
        </h2>
        <ul className="mt-[1vw] mb-[3.2vw] text-[0.83vw]">
          {universities.map((university, index) => (
            <li
              key={index}
              className={`flex items-center py-[1vw] border-b border-gray-700 last:border-b-0
       ${index === 2 || (index === 3 && 'text-grey4')}   
         ${index === 4 && 'text-grey3'}   
      `}
            >
              <span className="">{index + 1}</span>
              <span className="ml-[1.3vw]">{university}</span>
            </li>
          ))}
        </ul>
      </div>
      <div ref={ref} className="w-full  bg-white absolute bottom-0" />
    </>
  );
}
