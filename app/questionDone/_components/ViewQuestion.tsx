'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import {BsQuestionLg} from 'react-icons/bs';

interface Question {
  question_id: number;
  title: string;
  content: string;
  university_name: string;
  created_date: string;
  view_cnt: number;
  curious_count: number;
}

export default function ViewQuestion() {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const mockQuestion: Question = {
      question_id: 1234,
      title: '급해요) 파이썬에서 효율적인 코드 작성 방법 알려주세요!',
      content:
        '가독성과 성능을 모두 고려한 효율적인 파이썬 코드를 작성하기 위해 어떤 기법이나 디자인 패턴을 활용하면 좋을까요? 가독성과 성능을 모두 고려한 효율적인 파이썬 코드를 작성하기 위해 어떤 기법이나 디자인 패턴을 활용하면 좋을까요?',
      university_name: '홍익대학교',
      created_date: '2025-02-06T12:34:56Z',
      view_cnt: 13,
      curious_count: 5,
    };
    setQuestion(mockQuestion);
  }, []);

  return (
    <main className="w-full h-full max-w-4xl mx-auto mt-10">
      <div className="bg-white rounded-2xl p-6 text-black border">
        {/* 제목 */}
        <div className="flex justify-between items-center">
          <h1 className="flex gap-4 text-lg font-bold">
            <Image
              src="/images/question/Q.svg"
              alt="Q icon"
              className="w-[20px]"
              width={20}
              height={20}
            />
            {question?.title}
          </h1>

          {/* 학교 */}
          <span className="text-sm px-2 py-1 bg-[#EBEBEB] font-[600] rounded-md">
            {question?.university_name}
          </span>
        </div>

        <div className="ml-9">
          {/* 조회수 */}
          <p className="text-xs text-[#606060] mt-2">
            조회수 {question?.view_cnt}회
          </p>

          {/* 본문 */}
          <p className="my-8 text-black">{question?.content}</p>

          {/* 나도 궁금해요 */}
          <div className="mt-4 flex items-center">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm">
              <BsQuestionLg />
              나도 궁금해요
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
