'use client';

import Image from 'next/image';
import {useState} from 'react';
import {TiThumbsUp} from 'react-icons/ti';

interface Answer {
  answer_id: number;
  user_id: number;
  content: string;
  created_date: string;
  like_count: number;
  is_chosen: boolean;
  images?: string[];
}
interface SelectAnswerProps {
  answers: Answer[];
  onSelect: (answerId: number) => void;
}

export default function SelectAnswer({answers, onSelect}: SelectAnswerProps) {
  const [thumbsUp, setThumbsUp] = useState<{[key: number]: boolean}>({});
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);

  const handleSelect = (answerId: number) => {
    setSelectedAnswerId(answerId);
    onSelect(answerId);
  };

  if (answers.length === 0) return null;

  return (
    <div className="mb-10">
      {answers.map(answer => (
        <div
          key={answer.answer_id}
          className="max-w-[832px] bg-white rounded-2xl px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-5 text-black border mt-6"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-8 w-[87%]">
              <Image
                src={
                  selectedAnswerId === answer.answer_id
                    ? '/images/question/select-answer-icon.svg'
                    : '/images/question/A.svg'
                }
                alt="A icon"
                width={selectedAnswerId === answer.answer_id ? 48 : 24}
                height={selectedAnswerId === answer.answer_id ? 48 : 24}
              />
              <p className="text-black">{answer.content}</p>
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
                thumbsUp[answer.answer_id]
                  ? 'bg-[#7BA1FF] text-white'
                  : 'bg-white text-black'
              }`}
              onClick={() =>
                setThumbsUp(prev => ({
                  ...prev,
                  [answer.answer_id]: !prev[answer.answer_id],
                }))
              }
            >
              <TiThumbsUp /> 좋아요
            </button>

            {!selectedAnswerId && (
              <button
                className="bg-[#7BA1FF] text-white text-sm font-semibold px-4 py-2 rounded-xl transition hover:bg-[#5a82e6]"
                onClick={() => handleSelect(answer.answer_id)}
              >
                채택하기
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
