'use client';

import {useEffect, useState} from 'react';
import SearchBar from '@/components/SearchBar';
import ViewQuestion from '@/components/ViewQuestion';
// import {getAnswerDetail, setAnswerChoice} from '@/app/apis/answerApi';
import {ViewQuestionProps} from '@/type';
import ViewAnswer from '@/components/ViewAnswer';
// import {useInfoStore} from '@/providers/store-provider';

const mockData = {
  question: {
    question_id: 9876,
    title: '기업의 지속 가능한 성장과 단기 이익의 균형',
    content:
      '기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요?',
    university_name: '홍익대학교',
    created_date: '2025-02-06T12:34:56Z',
    view_cnt: 43,
    curious_count: 7,
  },
  answers: [
    {
      answer_id: 5678,
      user_id: 54321,
      content:
        '기업이 단기적인 이익을 추구하면서도 장기적인 비전을 유지하려면 균형 잡힌 경영 전략이 필요합니다.',
      created_date: '2025-02-16T13:00:00Z',
      like_count: 15,
      is_chosen: true,
    },
    {
      answer_id: 5679,
      user_id: 54322,
      content:
        '단기적인 성과를 달성하면서도 장기적인 목표를 고려하려면 KPI를 활용하고 R&D 투자를 병행해야 합니다.',
      created_date: '2025-02-17T15:30:00Z',
      like_count: 10,
      is_chosen: false,
    },
  ],
};

export default function AnswerSelection() {
  // const userId = useInfoStore(state => state.userId);
  const [data, setData] = useState<ViewQuestionProps | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    //const response = await getAnswerDetail(questionId);
    // console.log(response);

    const parseData = {
      ...mockData,
      question: {...mockData.question, answer_cnt: mockData.answers.length},
    };

    setData(parseData);
  };

  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      <SearchBar />
      {data ? (
        <>
          <ViewQuestion question={data?.question} />
          <ViewAnswer answers={data.answers} isMyQuestion={true} />
        </>
      ) : (
        <div>loading...</div>
      )}
    </main>
  );
}
