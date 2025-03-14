'use client';
import {useEffect, useState} from 'react';
import SearchBar from '@/components/SearchBar';
import {useParams} from 'next/navigation';
import Link from 'next/link';
import ViewQuestion from '@/components/ViewQuestion';
import {ViewQuestionProps} from '@/type';
import ViewAnswer from '@/components/ViewAnswer';
import WriteAnswer from '@/components/WriteAnswer';
import {getAnswerDetail} from '@/app/apis/answerApi';
import {getCookie} from '@/utils/cookie';

export default function QuestionDetailPage() {
  const {questionId} = useParams<{questionId: string}>();
  const [datas, setDatas] = useState<ViewQuestionProps>();
  const [isMyQuestion, setIsMyQuestion] = useState<boolean>(false);
  const [answering, setAnswering] = useState<boolean>(false);

  useEffect(() => {
    if (questionId) getData(parseInt(questionId));
  }, [questionId]);

  const getData = async (questionId: number) => {
    const response = await getAnswerDetail(questionId);

    console.log(response);

    const infoCookie = getCookie('info');
    const info = infoCookie ? JSON.parse(infoCookie) : null;

    if (response.userId === info.userId) setIsMyQuestion(true);

    setDatas({
      question: response,
      answers: response.answers || [],
    });
  };

  return (
    <main className="flex w-full min-h-screen bg-white flex-col items-center">
      <SearchBar />
      {datas?.question && (
        <ViewQuestion question={datas.question} isMyQuestion={isMyQuestion} />
      )}
      {datas?.answers && (
        <ViewAnswer
          answers={datas.answers}
          isMyQuestion={isMyQuestion}
          questionId={datas.question.questionId}
        />
      )}
      <div className="mt-10 flex justify-center">
        {isMyQuestion ? (
          <Link
            href="/question/questionCreate"
            className="pt-6 cursor-pointer text-[#333333] text-sm md:text-base border-b border-[#333333]"
          >
            추가 질문하기
          </Link>
        ) : answering ? (
          <WriteAnswer />
        ) : (
          <button
            onClick={() => setAnswering(true)}
            className="bg-main mb-[5vw] text-white w-[50.6vw] px-4 py-4 rounded-[1vw] text-20px flex justify-center items-center"
          >
            답변하기
          </button>
        )}
      </div>
    </main>
  );
}
