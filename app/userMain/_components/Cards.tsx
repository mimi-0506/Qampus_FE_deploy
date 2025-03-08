'use client';

import {answerType, questionType} from '@/type';
import QuestionCard from './QuestionCard';
import AnswerCard from './AnswerCard';
import {useEffect, useState} from 'react';

export default function Cards({
  datas,
}: {
  datas: questionType[] | answerType[] | undefined;
}) {
  const [nowOpen, setNowOpen] = useState<number>(0);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  if (!datas || datas.length === 0) return null;

  return (
    <>
      {[1, 2, 3].map(index => {
        const data = datas[index - 1];

        if (data && !('like_count' in data)) {
          return (
            <QuestionCard
              key={index}
              index={index}
              open={nowOpen === index}
              data={data as questionType}
              setNowOpen={setNowOpen}
            />
          );
        } else {
          return (
            <AnswerCard
              key={index}
              index={index}
              open={nowOpen === index}
              data={data as answerType}
              setNowOpen={setNowOpen}
            />
          );
        }
      })}
    </>
  );
}
