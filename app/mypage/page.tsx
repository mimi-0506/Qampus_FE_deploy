/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import SearchBar from '@/components/SearchBar';
import InfoCard from './_components/InfoCard';
import SelectField from '@/components/SelectField';
import Pagination from '@/components/Pagination';
import {useEffect, useState} from 'react';
import PreviewCard from '@/components/PreviewCard';
import SortSelector from '@/components/SortSelector';
import {getMyQuestionList} from '../apis/myPageApi';
import {CATEGORIES, PAGE_SIZE} from '@/constants/constants';
import {PreviewCardProps} from '@/type';

type UserInfo = {
  userId: number;
  name: string;
  nickname: string;
  major: string;
  universityName: string;
};

type QuestionResponse = {
  questionId: number;
  title: string;
  content: string;
  category: string;
  viewCount: number;
  answerCnt: number;
  unreadAnswerCnt: number;
  createdDate: string;
};

type Questions = {
  totalElements: number;
  totalPages: number;
  size: number;
  content: QuestionResponse[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageSize: number;
    paged: boolean;
    pageNumber: number;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
};

export default function MyPage() {
  //카테고리 ID - 1:전체 2:자연계 3:인문계 4:예체능 5:실무
  const [selectedField, setSelectedField] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questionList, setQuestionList] = useState<PreviewCardProps[]>([]);
  const [info, setInfo] = useState<UserInfo | undefined>(undefined);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setData(selectedField, currentPage);
  }, [selectedField, currentPage]);

  const setData = async (selectedField: number, page: number) => {
    setLoading(true);
    try {
      const response = await getMyQuestionList({
        categoryId: selectedField + 1,
        page,
        pageSize: PAGE_SIZE,
      });

      const {questions, ...nowInfo} = response;
      const mappedQuestions = questions.content.map(
        (question: QuestionResponse) => ({
          question_id: question.questionId,
          title: question.title,
          content: question.content,
          answerCount: question.unreadAnswerCnt,
          createdDate: question.createdDate,
        }),
      );

      setQuestionList(mappedQuestions);
      setTotalPages(questions.totalPages);

      if (!info) setInfo(nowInfo as UserInfo);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex w-full pb-20 flex-col items-center bg-white min-h-screen">
      <SearchBar />
      {info && <InfoCard info={info} />}
      <SelectField
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />

      <div className="flex w-[70%] justify-between">
        <p className="text-black font-[600] py-8">
          {selectedField
            ? `${CATEGORIES[selectedField]} 분야의 등록된 질문은 ${questionList.length}개가 있어요`
            : `지금까지 총 ${questionList.length}개의 질문을 작성했어요`}
        </p>
        <SortSelector />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p>로딩 중...</p>
        </div>
      ) : (
        <div className="w-[70%] flex flex-col">
          {questionList?.map((question: PreviewCardProps, index) => (
            <PreviewCard
              key={index}
              question_id={question.question_id}
              title={question.title}
              content={question.content}
              answerCount={question.answerCount}
              createdDate={question.createdDate}
              isMyPage={true}
            />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
