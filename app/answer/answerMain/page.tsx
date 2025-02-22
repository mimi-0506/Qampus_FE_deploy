'use client';

import PreviewCard from '@/components/PreviewCard';
import SearchBar from '@/components/SearchBar';
import SelectField from '@/components/SelectField';
import Image from 'next/image';
import {useState} from 'react';

const mockQuestions = [
  {
    id: 1,
    title: '기업의 지속 가능한 성장과 단기 이익의 균형',
    content:
      '기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요? 빠른 답변 해주시면 감사하겠습니다.',
    answerCount: 0,
    createdDate: '2025-02-21T12:00:00Z',
  },
  {
    id: 2,
    title: '스타트업의 성공적인 자금 조달 방법',
    content:
      '스타트업이 투자자들에게 신뢰를 줄 수 있는 효과적인 자금 조달 방법은 무엇인가요?',
    answerCount: 0,
    createdDate: '2025-02-20T15:30:00Z',
  },
  {
    id: 3,
    title: 'AI 기술이 전통 산업에 미치는 영향',
    content:
      'AI 기술이 전통적인 산업 분야에 미치는 긍정적 영향과 부정적 영향은 무엇인가요?',
    answerCount: 0,
    createdDate: '2025-02-19T10:45:00Z',
  },
];

export default function AnswerMainPage() {
  const [selectedField, setSelectedField] = useState<string>('');
  const [questions] = useState(mockQuestions);

  return (
    <main className="w-full flex bg-white min-h-screen flex-col items-center">
      <SearchBar />
      <div className="w-full relative mt-10">
        <Image
          src="/svg/answer_banner.svg"
          alt="banner"
          layout="responsive"
          width={2000}
          height={500}
        />
      </div>

      <SelectField
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />

      <p className="text-black font-[600] w-[70%] py-8">
        답변 가능한 질문 {questions.length.toLocaleString()}개가 있어요
      </p>

      <div className="w-[70%] flex flex-col">
        {questions.map(question => (
          <PreviewCard
            key={question.id}
            title={question.title}
            content={question.content}
            answerCount={question.answerCount}
            createdDate={question.createdDate}
          />
        ))}
      </div>
    </main>
  );
}
