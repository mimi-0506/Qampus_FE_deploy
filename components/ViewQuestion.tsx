'use client';

import Image from 'next/image';
import {BsQuestionLg} from 'react-icons/bs';
import {formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import ViewAnswer from './ViewAnswer';
import ViewAI from './VIewAI';
import {setCurious} from '@/app/apis/curiousApi';
import {answerDetailType, ViewQuestionProps} from '@/type';

const mockAnswer = `
 가독성과 성능을 고려한 효율적인 파이썬 코드를 작성하려면 **코딩 스타일 준수, 최적화 기법 활용, 유지보수성 강화**가 필요합니다. PEP 8을 따르고, 의미 있는 변수명과 함수명을 사용하며, 코드 모듈화를 통해 가독성을 높여야 합니다. 성능 최적화를 위해 리스트 컴프리헨션, 제너레이터, 내장 함수를 적극 활용하고, 멀티스레딩·멀티프로세싱으로 병렬 처리를 최적화할 수 있습니다. 또한, 싱글톤, 팩토리, 데코레이터 패턴 등을 적용하면 유지보수성과 확장성이 강화됩니다. 이를 통해 가독성이 좋고 성능이 뛰어난 코드를 작성할 수 있습니다.
  `;

export default function ViewQuestion({datas}: ViewQuestionProps) {
  const {question, answers} = datas;

  const getKSTTimeAgo = (utcDate: string) => {
    const kstDate = new Date(new Date(utcDate).getTime() + 9 * 60 * 60 * 1000);
    return formatDistanceToNow(kstDate, {addSuffix: true, locale: ko});
  };

  const handleCurious = async () => {
    //궁금해요 눌렀는지 여부에 따라..
    await setCurious(question.question_id);
  };

  return (
    <main className="w-full max-w-4xl mx-auto mt-10 px-4 md:px-8">
      <div className="bg-white rounded-2xl px-6 md:px-8 pt-8 pb-5 text-black border">
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
            {question.university_name}
          </span>
        </div>

        <div className="ml-3 md:ml-9">
          <p className="text-xs md:text-sm text-[#606060] mt-2">
            조회수 {question.view_cnt}회
          </p>
          <p className="my-4 text-sm md:my-6 text-black">{question.content}</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <button
            onClick={handleCurious}
            className="flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm transition-all duration-300 bg-white text-black"
          >
            <BsQuestionLg />
            나도 궁금해요
          </button>
          <p className="text-xs md:text-sm text-[#606060]">
            답변 {answers.length}개 · {getKSTTimeAgo(question.created_date)}
          </p>
        </div>
      </div>

      <ViewAI answer={mockAnswer} />
      {answers.map((nowAnswer: answerDetailType, key) => (
        <ViewAnswer answer={nowAnswer} key={key} />
      ))}
    </main>
  );
}
