'use client';

import SearchBar from '@/components/SearchBar';
import ViewQuestion from '@/components/ViewQuestion';
import {useRouter} from 'next/navigation';

export default function QuestionDonePage() {
  const router = useRouter();

  const question = {
    question_id: 9876,
    title: '급해요) 파이썬에서 효율적인 코드 작성 방법 알려주세요!',
    content: '가독성과 성능을 모두 고려한 ~~',
    university_name: '홍익대학교',
    created_date: '2025-02-06T12:34:56Z',
    view_cnt: 13,
    curious_count: 5,
  };

  const answers = [
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
  ];

  return (
    <main className="flex w-full h-[calc(100vh-80px)] bg-white flex-col items-center ">
      <SearchBar />

      <ViewQuestion question={question} answers={answers} />

      <div className="mt-10 flex justify-center">
        <p
          className="pt-6 md:pt-10 cursor-pointer text-[#333333] text-sm md:text-base border-b border-[#333333]"
          onClick={() => router.push('/questionCreate')}
        >
          추가 질문하기
        </p>
      </div>
    </main>
  );
}
