'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import {BsQuestionLg} from 'react-icons/bs';
import {formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';

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
  const [isCurious, setIsCurious] = useState(false);

  useEffect(() => {
    const mockQuestion: Question = {
      question_id: 1234,
      title: '급해요) 파이썬에서 효율적인 코드 작성 방법 알려주세요!',
      content:
        '가독성과 성능을 모두 고려한 효율적인 파이썬 코드를 작성하기 위해 어떤 기법이나 디자인 패턴을 활용하면 좋을까요? 가독성과 성능을 모두 고려한 효율적인 파이썬 코드를 작성하기 위해 어떤 기법이나 디자인 패턴을 활용하면 좋을까요?',
      university_name: '홍익대학교',
      created_date: '2025-02-16T18:30:00Z',
      view_cnt: 13,
      curious_count: 5,
    };
    setQuestion(mockQuestion);
  }, []);

  // UTC → KST 변환
  const getKSTTimeAgo = (utcDate: string) => {
    const kstDate = new Date(new Date(utcDate).getTime() + 9 * 60 * 60 * 1000);
    return formatDistanceToNow(kstDate, {addSuffix: true, locale: ko});
  };

  return (
    <main className="w-full max-w-4xl mx-auto mt-10">
      <div className="bg-white rounded-2xl px-8 pt-8 pb-5 text-black border">
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
          <p className="my-10 text-black">{question?.content}</p>

          <div className="mt-10 flex justify-between items-center">
            {/* 나도 궁금해요 */}
            <button
              className={`flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm transition-all duration-300 ${
                isCurious ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black'
              }`}
              onClick={() => setIsCurious(prev => !prev)}
            >
              <BsQuestionLg />
              나도 궁금해요
            </button>

            {/* 답변 개수, 작성 시간 */}
            <p className="text-xs text-[#606060]">
              답변 0개 ·{' '}
              {question?.created_date
                ? getKSTTimeAgo(question.created_date)
                : '방금 전'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
