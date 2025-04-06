'use client';

import Image from 'next/image';
import useScrollAnimation from './useScrollAnimation';
import {useEffect, useState} from 'react';
import {questionType} from '@/type';
// import {fetchWithoutAuth} from '@/app/apis/clientFetch';

export default function Page6() {
  const {ref, isVisible} = useScrollAnimation();
  const [datas, setDatas] = useState<questionType[] | null>(null);
  const MEDAL = ['gold', 'silver', 'bronze'];

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    // const response = await fetchWithoutAuth({method: 'GET', url: '/home'});
    // setDatas(response.weeklyQuestions);
    //서버 닫혔으므로 더미데이터
    const dummy: questionType[] = [
      {
        question_id: 1,
        title: 'CS 지식은 어떻게 공부하는 게 좋을까요?',
        university_name: '서울대학교',
        major: '컴퓨터공학과',
        curious_count: 87,
        view_count: 1234,
        total_score: 98,
      },
      {
        question_id: 2,
        title: '심리학 전공자는 상담사가 꼭 되어야 하나요?',
        university_name: '연세대학교',
        major: '심리학과',
        curious_count: 45,
        view_count: 980,
        total_score: 85,
      },
      {
        question_id: 3,
        title: '마케팅 직무에 필요한 포트폴리오는?',
        university_name: '고려대학교',
        major: '경영학과',
        curious_count: 30,
        view_count: 765,
        total_score: 77,
      },
    ];
    setDatas(dummy);
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
              className={`relative box-border flex h-[10.83vw] w-[65.38vw] items-center gap-[2.29vw] p-[0.78vw]
                ${index === 0 ? "bg-[url('/images/main/box1_page6.webp')]" : "bg-[url('/images/main/box2_page6.webp')]"}
                ${index === 0 ? ' left-[12.3vw]' : index === 1 ? 'left-[22.5vw]' : 'left-[15vw]'}
                bg-cover bg-center`}
            >
              <div className="relative aspect-[1/1.15] w-[5vw]">
                <Image
                  src={`/images/main/medal_${MEDAL[index]}.webp`}
                  fill
                  sizes="5vw"
                  alt="medal"
                />
              </div>
              <div className="flex flex-col gap-[0.94vw]">
                <div className="bg-page6subtitle text-grey4 inline-flex h-[2.14vw] px-[0.5vw] items-center justify-center rounded-[2.66vw] text-[1.04vw] whitespace-nowrap self-start min-w-0">
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
      <div ref={ref} className="w-full  bg-white absolute bottom-[20vw]" />
    </div>
  );
}
