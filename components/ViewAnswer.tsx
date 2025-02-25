'use client';

import Image from 'next/image';
import {useState} from 'react';
import {TiThumbsUp} from 'react-icons/ti';
import {formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';

interface Answer {
  answer_id: number;
  user_id: number;
  content: string;
  created_date: string;
  like_count: number;
  is_chosen: boolean;
  images?: string[];
}

interface ViewAnswerProps {
  answers: Answer[];
}

export default function ViewAnswer({answers}: ViewAnswerProps) {
  const [thumbsUp, setThumbsUp] = useState(false);

  const getKSTTimeAgo = (utcDate: string) => {
    const kstDate = new Date(new Date(utcDate).getTime() + 9 * 60 * 60 * 1000);
    return formatDistanceToNow(kstDate, {addSuffix: true, locale: ko});
  };

  if (answers.length === 0) return null;

  return (
    <div>
      {answers.map(answer => (
        <div
          key={answer.answer_id}
          className="bg-white rounded-2xl px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-5 text-black border mt-6"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-8 w-[87%]">
              <Image
                src="/images/question/A.svg"
                alt="A icon"
                width={24}
                height={24}
              />
              <p className="text-black text-sm">{answer.content}</p>
            </div>
            <span className="text-sm px-2 py-1 bg-[#EBEBEB] font-semibold rounded-md whitespace-nowrap">
              건국대학교
            </span>
          </div>

          {answer.images && answer.images.length > 0 && (
            <div className="flex gap-2 mt-4">
              {answer.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`답변 이미지 ${index + 1}`}
                  width={150}
                  height={150}
                  className="rounded-lg border"
                />
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <button
              className={`flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm transition-all duration-300 ${
                thumbsUp ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black'
              }`}
              onClick={() => setThumbsUp(prev => !prev)}
            >
              <TiThumbsUp /> 좋아요
            </button>
            <p className="text-xs md:text-sm text-[#606060]">
              {getKSTTimeAgo(answer.created_date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
