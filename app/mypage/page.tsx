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
import {PreviewCardProps} from '@/type';

export default function MyPage() {
  //카테고리 ID - 1:전체 2:자연계 3:인문계 4:예체능 5:실무
  const [selectedField, setSelectedField] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [questionList, setQuestionList] = useState<PreviewCardProps[] | []>([]);
  const [info, setInfo] = useState();

  const totalPages = Math.ceil(mockQuestions.length / PAGE_SIZE);

  useEffect(() => {
    setData(selectedField);
  }, [selectedField]);

  const setData = async (selectedField: number) => {
    const response = await getMyQuestionList({
      categoryId: selectedField + 1,
      page: currentPage,
      pageSize: PAGE_SIZE,
    });

    const {questions, ...nowInfo} = response;
    setQuestionList([...questionList, ...questions]);

    if (!info) setInfo(nowInfo);
  };

  return (
    <main className="flex w-full pb-20 flex-col items-center bg-white min-h-screen">
      <SearchBar />
      <InfoCard info={info} />
      <SelectField
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />

      <div className="flex w-[70%] justify-between">
        <p className="text-black font-[600] py-8">
          {selectedField
            ? `${CATEGORIES[selectedField]} 분야의 등록된 질문은 ${0}개가 있어요`
            : `지금까지 총 ${questionList.length}개의 질문을
          작성했어요`}
        </p>
        <SortSelector />
      </div>

      <div className="w-[70%] flex flex-col">
        {questionList?.map((question: PreviewCardProps, index) => (
          <PreviewCard
            key={index}
            question_id={question?.question_id}
            title={question?.title}
            content={question?.content}
            answerCount={question?.answerCount}
            createdDate={question?.createdDate}
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
