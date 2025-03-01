'use client';

import {useEffect, useState} from 'react';
import ActInfo from './_components/ActInfo';
import UserInfo from './_components/UserInfo';
import {userMainDataType} from '@/type';
import {fetchWithAuth} from '../apis/clientFetch';

const dummy = {
  userHomeDto: {
    name: '김하나',
    universityName: '홍익대학교',
    major: '시각디자인학과',
  },
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
  ],
};

export default function UserMainPage() {
  const [data, setData] = useState<userMainDataType | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetchWithAuth({method: 'GET', url: '/home'});
    const data = await response.json();

    console.log(data);
    setData(dummy);
  };

  return (
    <main className=" bg-usermainbg2 flex overflow-hidden flex-col aspect-[1922/3500] w-screen items-center justify-center relative">
      <UserInfo userHomeDto={data?.userHomeDto} />
      <ActInfo
        weeklyQuestions={data?.weekly_questions}
        popularAnswer={data?.popular_answers}
      />
    </main>
  );
}
