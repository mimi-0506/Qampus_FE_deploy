/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import PreviewCard from '@/components/PreviewCard';
import SearchBar from '@/components/SearchBar';
import SelectField from '@/components/SelectField';
import Image from 'next/image';
import SortSelector from '@/components/SortSelector';
import Pagination from '@/components/Pagination';
import {useEffect, useState} from 'react';
import {getAnswerListByCategory} from '@/app/apis/answerApi';
import {PAGE_SIZE} from '@/constants/constants';
import {PreviewCardProps} from '@/type';

export default function AnswerMainPage() {
  const [selectedField, setSelectedField] = useState<number>(0);
  const [questions, setQuestions] = useState<PreviewCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState<string>('latest');

  useEffect(() => {
    getData(1);
  }, [selectedField, sort]);

  useEffect(() => {
    if (currentPage !== 0) getData(currentPage);
  }, [currentPage]);

  const getData = async (page: number) => {
    setLoading(true);
    try {
      const response = await getAnswerListByCategory({
        categoryId: selectedField + 1,
        page,
        size: PAGE_SIZE,
        sort,
      });

      if (!response || !response.content) {
        console.error('Invalid API response:', response);
        setQuestions([]);
        setLoading(false);
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mappedQuestions = response.content.map((question: any) => ({
        question_id: question.question_id,
        title: question.title,
        content: question.content,
        unreadAnswerCnt: 0,
        answerCnt: question.answerCount ?? 0,
        createdDate: question.createdDate,
      }));

      setQuestions(mappedQuestions);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full flex bg-white min-h-screen flex-col items-center">
      <SearchBar />

      <div className="relative w-[100vw] aspect-[2000/500]">
        <Image
          src="/images/question/answer_banner.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <SelectField
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />

      <div className="w-[70%] justify-between flex">
        <p className="text-black font-[600] py-8">
          답변 가능한 질문 {questions?.length?.toLocaleString()}개가 있어요
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
              unreadAnswerCnt={0}
              answerCnt={question.answerCnt}
              createdDate={question.createdDate}
            />
          ))}
      </div>

      {loading && <p>로딩 중...</p>}

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
