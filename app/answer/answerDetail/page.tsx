'use client';

import {useEffect, useState} from 'react';
import SearchBar from '@/components/SearchBar';
import ViewQuestion from '@/components/ViewQuestion';
import WriteAnswer from '@/components/WriteAnswer';

interface Answer {
  answer_id: number;
  user_id: number;
  content: string;
  created_date: string;
  like_count: number;
  is_chosen: boolean;
  images?: string[];
}

interface Question {
  question_id: number;
  title: string;
  content: string;
  university_name: string;
  created_date: string;
  view_cnt: number;
  curious_count: number;
}

interface QuestionData {
  question: Question;
  answers: Answer[];
}

export default function AnswerDetail() {
  const [data, setData] = useState<QuestionData | null>(null);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    const mockData: QuestionData = {
      question: {
        question_id: 9876,
        title: '급해요) 파이썬에서 효율적인 코드 작성 방법 알려주세요!',
        content:
          '가독성과 성능을 모두 고려한 효율적인 파이썬 코드를 작성하기 위해 어떤 기법이나 디자인 패턴을 활용하면 좋을까요?',
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
            '파이썬에서 효율적인 코드를 작성하려면 가독성, 성능, 유지보수성을 고려해야 합니다. 먼저, 가독성을 높이기 위해 PEP 8 스타일 가이드를 따르고, 의미 있는 변수명과 함수명을 사용하며, 주석을 적절히 활용해야 합니다. 성능 최적화를 위해 리스트 컴프리헨션을 사용하고, 불필요한 메모리 사용을 줄이기 위해 제너레이터를 활용하며, 내장 함수를 적극적으로 사용하면 좋습니다. 또한, 유지보수성을 높이려면 함수와 모듈화를 통해 코드를 구조화하고, 객체 지향 프로그래밍(OOP)을 적용하여 확장성을 고려해야 합니다. 이를 통해 가독성 높고 실행 속도가 빠른 파이썬 코드를 작성할 수 있습니다.',
          created_date: '2025-02-06T13:00:00Z',
          like_count: 15,
          is_chosen: false,
          images: [],
        },
      ],
    };
    setData(mockData);
  }, []);

  const handleAddAnswer = (content: string, images: string[]) => {
    if (!data) return;

    const newAnswer: Answer = {
      answer_id: Date.now(),
      user_id: 12345,
      content,
      created_date: new Date().toISOString(),
      like_count: 0,
      is_chosen: false,
      images,
    };

    setData({...data, answers: [...data.answers, newAnswer]});
    setIsWriting(false);
  };

  if (!data) return <p>로딩 중...</p>;

  return (
    <main className="flex py-10 flex-col items-center bg-white pb-40 min-h-screen">
      <SearchBar />

      <ViewQuestion question={data.question} answers={data.answers} />

      {!isWriting ? (
        <button
          className="w-[600px] h-12 mt-6 bg-[#7BA1FF] text-white text-[14px] font-semibold rounded-xl flex items-center justify-center transition hover:bg-[#5a82e6]"
          onClick={() => setIsWriting(true)}
        >
          답변하기
        </button>
      ) : (
        <div className="w-full max-w-[832px] mt-4 max-w-[800px] flex flex-col gap-[3vh]">
          <WriteAnswer onAddAnswer={handleAddAnswer} />
        </div>
      )}
    </main>
  );
}
