'use client';

import {useEffect, useState} from 'react';
import SearchBar from '@/components/SearchBar';
import ViewQuestion from '@/components/ViewQuestion';
import {getAnswerDetail} from '@/app/apis/answerApi';
import {ViewQuestionProps} from '@/type';
import ViewAnswer from '@/components/ViewAnswer';

export default function AnswerSelection() {
  // const userId = useInfoStore(state => state.userId);
  const [data, setData] = useState<ViewQuestionProps | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const questionId = 1;
    const response = await getAnswerDetail(questionId);

    const {answers, ...question} = response;

    setData({
      question: question,
      answers: answers,
    });
  };

  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      <SearchBar />
      {data ? (
        <>
          <ViewQuestion question={data?.question} isMyQuestion={true} />
          <ViewAnswer answers={data.answers} isMyQuestion={true} />
        </>
      ) : (
        <div>loading...</div>
      )}
    </main>
  );
}
