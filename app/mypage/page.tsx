'use client';

import SearchBar from '@/components/SearchBar';
import InfoCard from './_components/InfoCard';
import SelectField from '@/components/SelectField';
import {useState} from 'react';
import PreviewCard from '@/components/PreviewCard';

export default function LoginPage() {
  const [selectedField, setSelectedField] = useState<string>('전체');

  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
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
      <PreviewCard
        title="기업의 지속 가능한 성장과 단기 이익의 균형"
        content="기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요?
빠른 답변 해주시면 감사하겠습니다. 기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요?
빠른 답변 해주시면 감사하겠습니다. 기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요?
빠른 답변 해주시면 감사하겠습니다."
        answerCount={3}
        createdDate="2025-02-21T12:00:00Z"
      />
      <PreviewCard
        title="기업의 지속 가능한 성장과 단기 이익의 균형"
        content="기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요?
빠른 답변 해주시면 감사하겠습니다."
        answerCount={0}
        createdDate="2025-02-21T12:00:00Z"
      />
    </main>
  );
}
