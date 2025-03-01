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

  useEffect(() => {
    getData(1);
  }, [selectedField]);

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  const getData = async (page: number) => {
    setLoading(true);
    const response = await getAnswerListByCategory({
      categoryId: selectedField,
      page,
      size: PAGE_SIZE,
    });

    setQuestions(response.items);
    setTotalPages(response.totalPages);
    setLoading(false);
  };

  return (
    <main className="w-full flex bg-white min-h-screen pb-20 flex-col items-center">
      <SearchBar />

      <div className="relative w-[100vw] aspect-[2000/500] mt-10">
        <Image
          src="/svg/answer_banner.svg"
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
          답변 가능한 질문 {questions.length.toLocaleString()}개가 있어요
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
