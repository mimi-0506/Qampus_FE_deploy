'use client';

import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import PreviewCard from '@/components/PreviewCard';
import {useState} from 'react';
import {mockQuestions} from '@/constants/mockQuestions';
import SortSelector from '@/components/SortSelector';

export default function SearchPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const totalPages = Math.ceil(mockQuestions.length / pageSize);

  const paginatedQuestions = mockQuestions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      <SearchBar />

      <div className="w-[70%] flex justify-between">
        <p className="text-black font-[600] py-8">
          질문 {mockQuestions.length.toLocaleString()}개가 있어요
        </p>
        <SortSelector />
      </div>

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
