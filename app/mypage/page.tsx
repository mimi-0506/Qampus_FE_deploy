'use client';

import SearchBar from '@/components/SearchBar';
import InfoCard from './_components/InfoCard';
import SelectField from '@/components/SelectField';
import {useState} from 'react';
import PreviewCard from '@/components/PreviewCard';

const mockQuestions = [
  {
    id: 1,
    title: '기업의 지속 가능한 성장과 단기 이익의 균형',
    content:
      '기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요? 빠른 답변 해주시면 감사하겠습니다.',
    answerCount: 3,
    createdDate: '2025-02-21T12:00:00Z',
  },
  {
    id: 2,
    title: '스타트업의 성공적인 자금 조달 방법',
    content:
      '스타트업이 투자자들에게 신뢰를 줄 수 있는 효과적인 자금 조달 방법은 무엇인가요?',
    answerCount: 5,
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

export default function LoginPage() {
  const [selectedField, setSelectedField] = useState<string>('전체');

  return (
    <main className="flex w-full flex-col items-center bg-white min-h-screen">
      <SearchBar />
      <InfoCard
        name="김하나"
        university="홍익대학교"
        department="경영학부"
        // profileImage="https://example.com/image.jpg"
      />
      <SelectField
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />
      <p className="w-[70%] text-black font-[600] py-8">
        지금까지 총 30개의 질문을 작성했어요
      </p>
      <div className="w-[70%]">
        {mockQuestions.map(question => (
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
