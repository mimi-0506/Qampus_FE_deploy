'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import {BsQuestionLg} from 'react-icons/bs';
import {formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import ViewAnswer from './ViewAnswer';

interface Answer {
  answer_id: number;
  user_id: number;
  content: string;
  created_date: string;
  like_count: number;
  is_chosen: boolean;
}

interface QuestionData {
  question: {
    question_id: number;
    title: string;
    content: string;
    university_name: string;
    created_date: string;
    view_cnt: number;
    curious_count: number;
    user_id: number;
  };
  answers: Answer[];
  total_pages: number;
}

export default function ViewQuestion() {
  const [data, setData] = useState<QuestionData | null>(null);
  const [isCurious, setIsCurious] = useState(false);

  useEffect(() => {
    const mockData: QuestionData = {
      question: {
        question_id: 9876,
        title: '기업의 지속 가능한 성장과 단기 이익의 균형',
        content:
          '기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요? 빠른 답변 해주시면 감사하겠습니다.',
        university_name: '홍익대학교',
        created_date: '2025-02-06T12:34:56Z',
        view_cnt: 13,
        curious_count: 5,
        user_id: 12345,
      },
      answers: [
        // {
        //   answer_id: 5678,
        //   user_id: 54321,
        //   content:
        //     '파이썬에서 효율적인 코드를 작성하려면 가독성과 성능을 고려해야 합니다. 리스트 컴프리헨션과 제너레이터를 활용하면 좋아요.',
        //   created_date: '2025-02-16T13:00:00Z',
        //   like_count: 15,
        //   is_chosen: false,
        // },
      ],
      total_pages: 1,
    };

    setData(mockData);
  }, []);

  const getKSTTimeAgo = (utcDate: string) => {
    const kstDate = new Date(new Date(utcDate).getTime() + 9 * 60 * 60 * 1000);
    return formatDistanceToNow(kstDate, {addSuffix: true, locale: ko});
  };

  if (!data) return null;

  return (
    <main className="w-full max-w-4xl mx-auto mt-10 px-4 md:px-8">
      <div className="bg-white rounded-2xl px-6 md:px-8 pt-8 pb-5 text-black border">
        <div className="flex justify-between items-center">
          <h1 className="flex gap-4 text-lg md:text-xl font-bold">
            <Image
              src="/images/question/Q.svg"
              alt="Q icon"
              width={24}
              height={24}
            />
            {data.question.title}
          </h1>
          <span className="text-sm px-2 py-1 bg-[#EBEBEB] font-semibold rounded-md whitespace-nowrap">
            {data.question.university_name}
          </span>
        </div>

        <div className="ml-3 md:ml-9">
          <p className="text-xs md:text-sm text-[#606060] mt-2">
            조회수 {data.question.view_cnt}회
          </p>
          <p className="my-4 md:my-6 text-black">{data.question.content}</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <button
            className={`flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm transition-all duration-300 ${
              isCurious ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black'
            }`}
            onClick={() => setIsCurious(prev => !prev)}
          >
            <BsQuestionLg />
            나도 궁금해요
          </button>
          <p className="text-xs md:text-sm text-[#606060]">
            답변 {data.answers.length}개 ·{' '}
            {getKSTTimeAgo(data.question.created_date)}
          </p>
        </div>
      </div>

      <ViewAnswer answers={data.answers} />
    </main>
  );
}
