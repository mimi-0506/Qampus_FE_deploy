import {deleteCurious, setCurious} from '@/app/apis/curiousApi';
import {questionDetailType} from '@/type';
import Image from 'next/image';
import {useState} from 'react';
import {BsQuestionLg} from 'react-icons/bs';
import {convertCreatedDate, getKSTTimeAgo} from '@/utils/dateUtils';
import {useRouter} from 'next/navigation';

export default function ViewQuestion({
  question,
  isMyQuestion,
}: {
  question: questionDetailType;
  isMyQuestion: boolean;
}) {
  const [imCurious, setImCurious] = useState(question.curious);
  const router = useRouter();

  const createdDate = Array.isArray(question.createdDate)
    ? convertCreatedDate(question.createdDate)
    : null;

  const handleCurious = async () => {
    if (imCurious) await deleteCurious(question.questionId);
    else await setCurious(question.questionId);

    setImCurious(x => !x);
  };

  const handleQuestionEdit = async () => {
    router.push(`/question/questionCreate?edit=${question.questionId}`);
  };

  return (
    <div className="bg-white w-[72.6vw] rounded-2xl px-6 md:px-8 pt-8 pb-5 text-black border">
      <div className="flex justify-between items-center">
        <h1 className="flex gap-4 text-lg md:text-xl font-[600]">
          <Image
            src="/images/question/Q.svg"
            alt="Q icon"
            width={24}
            height={24}
          />
          {question.title}
        </h1>
        <span className="text-sm px-2 py-1 bg-[#EBEBEB] font-semibold rounded-md whitespace-nowrap">
          {question.universityName}
        </span>
      </div>

      <div className="ml-3 md:ml-9">
        <p className="text-xs md:text-sm text-[#606060] mt-2">
          조회수 {question.viewCnt}회
        </p>
        <p className="my-4 text-sm md:my-6 text-black">{question.content}</p>
        {question.imageUrls && question.imageUrls.length > 0 && (
          <div className="flex gap-2 mt-4">
            {question.imageUrls.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Question Image ${index + 1}`}
                width={200}
                height={200}
                className="rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <button
          onClick={handleCurious}
          className={`flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm transition-all duration-300
               ${imCurious ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black'}
            `}
        >
          <BsQuestionLg />
          나도 궁금해요
        </button>
        <div>
          {isMyQuestion && (
            <button onClick={handleQuestionEdit} className="text-dark1">
              수정하기
            </button>
          )}
          <p className="text-xs md:text-sm text-[#606060]">
            답변 {question.answer_cnt ?? 0}개 · {getKSTTimeAgo(createdDate)}
          </p>
        </div>
      </div>
    </div>
  );
}
