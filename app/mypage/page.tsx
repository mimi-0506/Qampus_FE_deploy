'use client';

import SearchBar from '@/components/SearchBar';
import InfoCard from './_components/InfoCard';
import SelectField from '@/components/SelectField';
import Pagination from '@/components/Pagination';
import {useEffect, useState} from 'react';
import PreviewCard from '@/components/PreviewCard';
import {mockQuestions} from '@/constants/mockQuestions';
import SortSelector from '@/components/SortSelector';
import {getMyQuestionList} from '../apis/myPageApi';
import {CATEGORIES, PAGE_SIZE} from '@/constants/constants';

export default function MyPage() {
  //카테고리 ID - 1:전체 2:자연계 3:인문계 4:예체능 5:실무
  const [selectedField, setSelectedField] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [questionList, setQuestionList] = useState([]);

  const totalPages = Math.ceil(mockQuestions.length / PAGE_SIZE);

  const paginatedQuestions = mockQuestions.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  useEffect(() => {
    setData(selectedField);
  }, [selectedField]);

  const setData = async (selectedField: number) => {
    const response = await getMyQuestionList({
      categoryId: selectedField,
      page: currentPage,
      pageSize: PAGE_SIZE,
    });

    const data = await response.json();

    console.log(data);

    // setQuestionList()
  };

  return (
    <main className="flex w-full pb-20 flex-col items-center bg-white min-h-screen">
      <SearchBar />
      <InfoCard />
      <SelectField
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />

      <div className="flex w-[70%] justify-between">
        <p className="text-black font-[600] py-8">
          {selectedField
            ? `${CATEGORIES[selectedField]} 분야의 등록된 질문은 0개가 있어요`
            : `지금까지 총 ${mockQuestions.length.toLocaleString()}개의 질문을
          작성했어요`}
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
