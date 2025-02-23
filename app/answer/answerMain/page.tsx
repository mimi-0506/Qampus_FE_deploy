'use client';

import PreviewCard from '@/components/PreviewCard';
import SearchBar from '@/components/SearchBar';
import SelectField from '@/components/SelectField';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import {useState} from 'react';
import {mockQuestions} from '@/constants/mockQuestions';

export default function AnswerMainPage() {
  const [selectedField, setSelectedField] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const totalPages = Math.ceil(mockQuestions.length / pageSize);

  // 현재 페이지에 해당하는 데이터 필터링
  const paginatedQuestions = mockQuestions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

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
        답변 가능한 질문 {mockQuestions.length.toLocaleString()}개가 있어요
      </p>

      <div className="w-[70%] flex flex-col">
        {paginatedQuestions.map(question => (
          <PreviewCard
            key={question.id}
            title={question.title}
            content={question.content}
            answerCount={question.answerCount}
            createdDate={question.createdDate}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
