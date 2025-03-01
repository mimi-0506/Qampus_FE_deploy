'use client';
import {useEffect, useState} from 'react';
import SearchBar from '@/components/SearchBar';
import {useParams} from 'next/navigation';
import Link from 'next/link';
import ViewQuestion from '@/components/ViewQuestion';
import {detailDataType} from '@/type';
import ViewAnswer from '@/components/ViewAnswer';
import WriteAnswer from '@/components/WriteAnswer';
import {getAnswerDetail} from '@/app/apis/answerApi';
import {useInfoStore} from '@/providers/store-provider';

//나중에 서버사이드 컴포넌트로 교체

export default function QuestionDetailPage() {
  const userId = useInfoStore(state => state.userId);
  const {questionId} = useParams<{questionId: string}>();

  const [datas, setDatas] = useState<detailDataType>();
  const [isMyQuestion, setIsMyQuestion] = useState<boolean>(false);
  const [answering, setAnswering] = useState<boolean>(false);

  useEffect(() => {
    if (questionId) getData(parseInt(questionId));
  }, []);

  const getData = async (questionId: number) => {
    const response = await getAnswerDetail(questionId);

    console.log(response);

    if (response.create_id === userId) setIsMyQuestion(true);
    setIsMyQuestion(false);

    setDatas(response);
  };

  return (
    <main className="flex w-full min-h-screen bg-white flex-col items-center">
      <SearchBar />
      {datas && <ViewQuestion question={datas} isMyQuestion={isMyQuestion} />}
      {datas?.answers && (
        <ViewAnswer answers={datas?.answers} isMyQuestion={isMyQuestion} />
      )}
      <div className="mt-10 flex justify-center">
        {isMyQuestion ? (
          <Link
            href="/question/questionCreate"
            className="pt-6 md:pt-10 cursor-pointer text-[#333333] text-sm md:text-base border-b border-[#333333]"
          >
            추가 질문하기
          </Link>
        ) : answering ? (
          <WriteAnswer />
        ) : (
          <button
            onClick={() => {
              setAnswering(true);
            }}
            className="bg-main text-white w-[50.6vw] rounded-[1vw] text-[1.4vw] flex justify-center items-center aspect-[973/85]"
          >
            답변하기
          </button>
        )}
      </div>
    </main>
  );
}
