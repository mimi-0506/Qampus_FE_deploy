/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import SearchBar from '@/components/SearchBar';
import PreviewCard from '@/components/PreviewCard';
import {useEffect, useState} from 'react';
import SortSelector from '@/components/SortSelector';
import {PAGE_SIZE} from '@/constants/constants';
import {useSearchParams} from 'next/navigation';
import {getAnswerSearch} from '../apis/answerApi';
import Pagination from '@/components/Pagination';
import {PreviewCardProps} from '@/type';

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [questions, setQuestions] = useState<PreviewCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState<string>('latest');

  useEffect(() => {
    getData();
  }, [query, currentPage, sort]);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getAnswerSearch({
        search: query,
        page: currentPage,
        size: PAGE_SIZE,
        sort,
      });

      if (!data || !data.content) {
        console.error('Invalid API response:', data);
        setQuestions([]);
        setLoading(false);
        return;
      }

      const mappedQuestions = data.content.map((question: any) => ({
        question_id: question.questionId,
        title: question.title,
        content: question.content,
        unreadAnswerCnt: 0,
        answerCnt: question.answerCnt ?? 0,
        createdDate: question.createdDate,
      }));

      setQuestions(mappedQuestions);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      <SearchBar />

      <div className="w-[70%] flex justify-between">
        <p className="text-black font-[600] py-8">
          {query} 관련 질문 {questions?.length.toLocaleString()}개가 있어요
        </p>
        <SortSelector onSortChange={setSort} />
      </div>

      <div className="w-[70%] flex flex-col">
        {Array.isArray(questions) &&
          questions.map((question, index) => (
            <PreviewCard
              key={index}
              question_id={question.question_id}
              title={question.title}
              content={question.content}
              unreadAnswerCnt={question.unreadAnswerCnt}
              answerCnt={question.answerCnt}
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
