'use client';

import Image from 'next/image';
import {useState} from 'react';
import {TiThumbsUp} from 'react-icons/ti';
import {deleteThumbsUP, setThumbsUP} from '@/app/apis/thumbsUPApi';
import {answerDetailType} from '@/type';
import {convertCreatedDate, getKSTTimeAgo} from '@/utils/dateUtils';

export default function Answer({
  answer,
  isMyQuestion,
  onSelect,
}: {
  answer: answerDetailType;
  isMyQuestion: boolean;
  onSelect: (answerId: number) => Promise<void>;
}) {
  const [thumbsUp, setThumbsUp] = useState(false);

  const handleThumbsUP = async () => {
    setThumbsUp(prev => !prev);
    console.log(answer);

    if (thumbsUp) await deleteThumbsUP(answer.answerId);
    else setThumbsUP(answer.answerId);
  };

  const createdDate = convertCreatedDate(answer.created_date);

  return (
    <div className="bg-white rounded-2xl w-[72.6vw] px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-5 text-black border mt-6">
      <div className="flex justify-between items-start">
        <div className="flex gap-8 w-[87%]">
          {answer.isChosen ? (
            <div className="w-[4.68vw] aspect-[90/170] relative">
              <Image src="/images/question/adopt.svg" alt="adopt" fill />
            </div>
          ) : (
            <div className="w-[1.25vw] aspect-[1/1] relative">
              <Image src="/images/question/A.svg" alt="A icon" fill />
            </div>
          )}
          <p className="text-black text-sm">{answer.content}</p>
        </div>
        <span className="text-sm px-2 py-1 bg-[#EBEBEB] font-semibold rounded-md whitespace-nowrap">
          {answer?.universityName}
        </span>
      </div>

      {Array.isArray(answer.imageUrls) && (
        <div className="flex gap-2 mt-4">
          {answer.imageUrls.map((image: string, index: number) => (
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
          onClick={handleThumbsUP}
        >
          <TiThumbsUp /> 좋아요
        </button>

        {isMyQuestion ? (
          <button
            className="bg-[#7BA1FF] text-white text-sm font-semibold px-4 py-2 rounded-xl transition hover:bg-[#5a82e6]"
            onClick={() => onSelect(answer.answerId)}
          >
            채택하기
          </button>
        ) : (
          <p className="text-xs md:text-sm text-[#606060]">
            {getKSTTimeAgo(createdDate)}
          </p>
        )}
      </div>
    </div>
  );
}
