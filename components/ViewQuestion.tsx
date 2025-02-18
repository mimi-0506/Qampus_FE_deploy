'use client';

import Image from 'next/image';
import {BsQuestionLg} from 'react-icons/bs';
import {formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import ViewAnswer from './ViewAnswer';

interface Question {
  question_id: number;
  title: string;
  content: string;
  university_name: string;
  created_date: string;
  view_cnt: number;
  curious_count: number;
}

interface Answer {
  answer_id: number;
  user_id: number;
  content: string;
  created_date: string;
  like_count: number;
  is_chosen: boolean;
  images?: string[];
}

interface ViewQuestionProps {
  question: Question;
  answers: Answer[];
}

export default function ViewQuestion({question, answers}: ViewQuestionProps) {
  const getKSTTimeAgo = (utcDate: string) => {
    const kstDate = new Date(new Date(utcDate).getTime() + 9 * 60 * 60 * 1000);
    return formatDistanceToNow(kstDate, {addSuffix: true, locale: ko});
  };

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
            {question.title}
          </h1>
          <span className="text-sm px-2 py-1 bg-[#EBEBEB] font-semibold rounded-md whitespace-nowrap">
            {question.university_name}
          </span>
        </div>

        <div className="ml-3 md:ml-9">
          <p className="text-xs md:text-sm text-[#606060] mt-2">
            조회수 {question.view_cnt}회
          </p>
          <p className="my-4 md:my-6 text-black">{question.content}</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm transition-all duration-300 bg-white text-black">
            <BsQuestionLg />
            나도 궁금해요
          </button>
          <p className="text-xs md:text-sm text-[#606060]">
            답변 {answers.length}개 · {getKSTTimeAgo(question.created_date)}
          </p>
        </div>
      </div>

      <ViewAnswer answers={answers} />
    </main>
  );
}
