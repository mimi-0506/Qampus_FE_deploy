'use client';

import {getAIAnswer} from '@/app/apis/aiApi';
import {useEffect, useState} from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa6';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ViewAI({questionId}: {questionId: number}) {
  const [data, setData] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getAIAnswer(questionId);
      setData(response.content);
    } catch (error) {
      console.error('데이터 불러오기 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[72.6vw] mt-6">
      <div className="w-full bg-[#F4F4F4] rounded-lg p-6 shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-[#5278FF] font-semibold transition-all"
        >
          <span>AI 답변 보기</span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {isOpen && (
          <div className="mt-6 text-sm text-[#273963]">
            {isLoading ? (
              <div className="text-gray-500 animate-pulse">
                ai 답변을 받아오는 중..
              </div>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
