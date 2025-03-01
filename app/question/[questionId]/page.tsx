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

//나중에 서버사이드 컴포넌트로 교체
const dummy = {
  question: {
    question_id: 9876,
    title: '급해요) 파이썬에서 효율적인 코드 작성 방법 알려주세요!',
    content: '가독성과 성능을 모두 고려한 ~~',
    university_name: '홍익대학교',
    created_date: '2025-02-06T12:34:56Z',
    view_cnt: 13,
    curious_count: 5,
  },
  answers: [
    {
      answer_id: 5678,
      user_id: 54321,
      content:
        '파이썬에서 가독성과 성능을 고려한 코드를 작성하려면 리스트 컴프리헨션과 제너레이터를 활용하는 것이 좋습니다.',
      created_date: '2025-02-06T13:00:00Z',
      like_count: 15,
      is_chosen: false,
      images: [],
    },
  ],
};

export default function QuestionDetailPage() {
  const {questionId} = useParams<{questionId: string}>();

  const [datas, setDatas] = useState<ViewQuestionProps>();
  const [isMyQuestion, setIsMyQuestion] = useState<boolean>(false);
  const [answering, setAnswering] = useState<boolean>(false);

  useEffect(() => {
    if (questionId) getData(parseInt(questionId));
  }, []);

  const getData = async (questionId: number) => {
    const response = await getAnswerDetail(questionId);

    console.log(response);
    console.log(questionId);

    // if(parseData.question.create_id === userId) setIsMyQuestion(true)
    setIsMyQuestion(false);

    setDatas(dummy);
  };

  return (
    <main className="flex w-full bg-white flex-col items-center">
      <SearchBar />
      {datas ? (
        <>
          <ViewQuestion
            question={datas?.question}
            isMyQuestion={isMyQuestion}
          />
          <ViewAnswer answers={datas?.answers} isMyQuestion={isMyQuestion} />
        </>
      ) : (
        <div>loading...</div>
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
