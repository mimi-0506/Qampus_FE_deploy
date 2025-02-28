'use client';

import {useEffect, useState} from 'react';
import Cards from './Cards';
import {userMainDataType} from '@/type';

const dummy = {
  weekly_questions: [
    {
      question_id: 1,
      title: '전공과 관련된 질문입니다.',
      university_name: '서울대학교',
      major: '컴퓨터공학과',
      curious_count: 10,
      view_count: 100,
      total_score: 80,
    },
    {
      question_id: 2,
      title: '이공계 대학원 진학 고민입니다.',
      university_name: 'KAIST',
      major: '기계공학과',
      curious_count: 8,
      view_count: 90,
      total_score: 70,
    },
    {
      question_id: 3,
      title: '세번째 더미 질문입니다.',
      university_name: '홍익대학교',
      major: '조소과',
      curious_count: 10,
      view_count: 100,
      total_score: 80,
    },
  ],
  popular_answers: [
    {
      question_id: 1,
      answer_id: 10,
      title: '이 질문의 제목입니다.',
      university_name: '서울대학교',
      content: '이 질문에 대한 답변입니다.',
      like_count: 25,
    },
    {
      question_id: 3,
      answer_id: 15,
      title: '대학원 입학 시 중요한 점은?',
      university_name: '연세대학교',
      content: '대학원에서는 연구 주제가 중요합니다.',
      like_count: 30,
    },
    {
      question_id: 4,
      answer_id: 16,
      title: '세번째 더미',
      university_name: '이화여자대학교',
      content: '더미3.',
      like_count: 50,
    },
  ],
};

export default function ActInfo() {
  const [data, setData] = useState<userMainDataType | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setData(dummy);
  };

  return (
    <div
      className="absolute w-full top-[60vw] z-10 pb-[26vw] bg-gradient-to-b
     from-black to-usermainbg2 text-white rounded-t-[5.2vw] flex flex-col"
    >
      <div className="mt-[8.8vw] flex flex-col justify-center items-center">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          Popular Questions · Answers
        </div>
        <h1 className="mt-[0.9vw] text-[1.46vw]">
          금주에 선별된 인기 질문과 답변이에요
        </h1>
      </div>

      <div className="box-border w-screen mt-[9vw] flex justify-between px-[6.3vw]">
        <div className="w-[14vw]">
          <h2 className="text-[1.46vw]">금주의 인기 질문</h2>
          <p className="text-grey2 text-[1.15vw] mt-[1vw]">
            인기 질문은 나도 궁금해요 수와 조회수를 합산해서 집계돼요
          </p>
        </div>

        <div className="flex gap-[1.5vw]">
          <Cards datas={data?.weekly_questions} />
        </div>
      </div>

      <div className="mt-[10.5vw] box-border w-screen flex justify-between px-[6.3vw]">
        <div className="w-[14vw]">
          <h2 className="text-[1.46vw]">금주의 인기 답변</h2>
          <p className="text-grey2 text-[1.15vw] mt-[1vw]">
            인기 답변은 각 답변에 달린 좋아요 수로 집계돼요
          </p>
        </div>

        <div className="flex gap-[1.5vw]">
          <Cards datas={data?.popular_answers} />
        </div>
      </div>
    </div>
  );
}
