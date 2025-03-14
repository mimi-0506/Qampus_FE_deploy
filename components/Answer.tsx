/* eslint-disable @next/next/no-img-element */
'use client';

import {useState, forwardRef, useEffect} from 'react';
import {TiThumbsUp} from 'react-icons/ti';
import {deleteThumbsUP, setThumbsUP} from '@/app/apis/thumbsUPApi';
import {answerDetailType} from '@/type';
import {convertCreatedDate, getKSTTimeAgo} from '@/utils/dateUtils';
import {IoIosClose} from 'react-icons/io';
const Answer = forwardRef(function Answer(
  {
    answer,
    isMyQuestion,
    onSelect,
    isCentered,
  }: {
    answer?: answerDetailType;
    isMyQuestion: boolean;
    onSelect: (answerId: number) => Promise<void>;
    chooseAnswerId: number | null;
    isCentered: boolean;
  },
  ref: React.Ref<HTMLDivElement>,
) {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [timeAgo, setTimeAgo] = useState<string>('등록일 없음');
  const [isChosen, setIsChosen] = useState(answer?.is_chosen || false);

  useEffect(() => {
    if (!answer?.createdDate) {
      setTimeAgo('등록일 없음');
      return;
    }

    let createdDate;
    if (Array.isArray(answer.createdDate)) {
      createdDate = convertCreatedDate(answer.createdDate);
    } else {
      createdDate = convertCreatedDate(String(answer.createdDate));
    }

    if (createdDate) {
      setTimeAgo(getKSTTimeAgo(createdDate));
    } else {
      setTimeAgo('방금 전');
    }
  }, [answer?.createdDate]);

  if (!answer) {
    return (
      <div className="text-center text-gray-500">답변을 불러오는 중...</div>
    );
  }

  const handleThumbsUP = async () => {
    setThumbsUp(prev => !prev);
    if (thumbsUp) await deleteThumbsUP(answer?.answerId);
    else setThumbsUP(answer?.answerId);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleChooseClick = async () => {
    if (!answer) return;

    try {
      await onSelect(answer.answerId);
      setIsChosen(prev => !prev);
    } catch (error) {
      console.error('채택 처리 실패:', error);
    }
  };

  return (
    <div
      ref={ref}
      data-answer-id={answer.answerId}
      className={`bg-white rounded-2xl relative w-[72.6vw] px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-5 text-black border mt-6
        ${isCentered ? 'border-1 border-blue-500 shadow-sm transition-all duration-300' : 'border'}
      `}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-8 w-[87%]">
          {isChosen ? (
            <div className="absolute top-0 left-6 transition-transform duration-300 ease-in-out transform scale-100">
              <img
                src="/images/question/adopt.png"
                alt="adopt"
                width={44}
                height={44}
              />
            </div>
          ) : (
            <div className="absolute top-8 left-8 w-[24px] h-[24px]">
              <img
                src="/images/question/A.svg"
                alt="A icon"
                width={24}
                height={24}
              />
            </div>
          )}

          <div>
            <p className="text-black text-sm ml-14 pb-2">{answer?.content}</p>
          </div>
        </div>

        {answer.universityName && (
          <span className="text-sm px-2 py-1 bg-[#EBEBEB] font-semibold rounded-md whitespace-nowrap">
            {answer.universityName}
          </span>
        )}
      </div>

      {Array.isArray(answer?.imageUrls) && answer.imageUrls.length > 0 && (
        <div className="overflow-x-auto flex gap-2 mt-8 ml-10 pb-4 scrollbar-hide">
          {answer.imageUrls.map((image, index) => (
            <div
              key={index}
              className="relative w-[180px] h-[240px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`답변 이미지 ${index + 1}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            </div>
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
            className={`text-white text-sm font-semibold px-4 py-2 rounded-xl transition ${
              isChosen
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-[#7BA1FF] hover:bg-[#5a82e6]'
            }`}
            onClick={handleChooseClick}
          >
            {isChosen ? '채택 취소' : '채택하기'}
          </button>
        ) : (
          <p className="text-xs md:text-sm text-[#606060]">{timeAgo}</p>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={handleCloseModal}
            className="absolute top-5 right-5 text-white"
          >
            <IoIosClose size={40} />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default Answer;
