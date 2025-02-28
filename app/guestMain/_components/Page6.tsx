'use client';

import Image from 'next/image';
import useScrollAnimation from './useScrollAnimation';
import {useEffect, useState} from 'react';
import {questionType} from '@/type';
import {fetchWithoutAuth} from '@/app/apis/clientFetch';

const dummy = {
  weekly_questions: [
    {
      question_id: 1,
      title:
        '지속 가능한 환경 기술들을 개발할 때 경제적 타당성과 환경적 이점을 동시에 충족시키는 방법은 뭔가요?',
      university_name: '서울대학교',
      major: '환경',
      curious_count: 215,
      view_count: 982,
      total_score: 80,
    },
    {
      question_id: 2,
      title:
        ' 여행사에서 판매하는 사회적 약자를 위한 관광상품(휠체어 이동지원)도 esg 경영을 실천하는 방법일까요?',
      university_name: 'KAIST',
      major: '경영',
      curious_count: 174,
      view_count: 815,
      total_score: 70,
    },
    {
      question_id: 3,
      title:
        'ai를 활용해서 만든 디자인의 저작권은 제작자에게 있다고 봐야 하나요?',
      university_name: '홍익대학교',
      major: '디자인',
      curious_count: 155,
      view_count: 798,
      total_score: 80,
    },
  ],
};

export default function Page6() {
  const {ref, isVisible} = useScrollAnimation();
  const [datas, setDatas] = useState<questionType[] | null>(null);
  const MEDAL = ['gold', 'silver', 'bronze'];

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const response = await fetchWithoutAuth({method: 'GET', url: '/home'});
    const data = await response.json();

    console.log(data);

    setDatas(dummy.weekly_questions);
  };

  return (
    <div className="aspect-[16/9] flex flex-col relative w-screen items-center justify-center bg-gradient-to-b from-black to-page6bg">
      <div className="flex flex-col items-center justify-center">
        <div className="from-dark2 to-light1 bg-gradient-to-r bg-clip-text text-[0.94vw] text-transparent">
          Popular Questions
        </div>
        <div className="text-[1.46vw] text-white">금주의 인기 질문</div>
      </div>

      <div
        className={`mt-[8.33vw] flex flex-col w-screen gap-[1.87vw]  opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
      >
        {datas?.map((data, index) => {
          return (
            <div
              key={index}
              className="relative left-[12.3vw] box-border flex h-[10.83vw] w-[65.38vw] items-center gap-[2.29vw] p-[0.78vw] bg-[url('/images/main/box1_page6.png')] bg-cover bg-center"
            >
              <div className="relative h-[5.57vw] w-[5.06vw]">
                <Image
                  src={`/images/main/medal_${MEDAL[index]}.png`}
                  fill
                  alt="medal"
                />
              </div>
              <div className="flex flex-col gap-[0.94vw]">
                <div className="bg-page6subtitle text-grey4 flex h-[2.14vw] w-[5.57vw] items-center justify-center rounded-[2.66vw] text-[1.04vw]">
                  {data.major}
                </div>
                <div className="text-[1.35vw] text-white">{data.title}</div>
                <div className="text-grey2 text-[1.04vw]">
                  조회수 {data.view_count}회 · 나도 궁금해요{' '}
                  {data.curious_count}개
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={ref} className="w-full  bg-white absolute bottom-0" />
    </div>
  );
}
