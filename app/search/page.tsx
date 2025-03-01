'use client';

import SearchBar from '@/components/SearchBar';
import PreviewCard from '@/components/PreviewCard';
import {useEffect, useState} from 'react';
import {mockQuestions} from '@/constants/mockQuestions';
import SortSelector from '@/components/SortSelector';
import {PAGE_SIZE} from '@/constants/constants';
import {useSearchParams} from 'next/navigation';
import {getAnswerSearch} from '../apis/answerApi';
import Pagination from '@/components/Pagination';

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [questions, setQuestions] = useState(mockQuestions.slice(0, PAGE_SIZE));
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getData(query);
  }, [query, currentPage]);

  const getData = async (query: string) => {
    setLoading(true);
    const data = await getAnswerSearch({
      search: query,
      page: currentPage,
      size: PAGE_SIZE,
    });

    setQuestions(data.questions);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {loading && <p>로딩 중...</p>}
    </main>
  );
}
