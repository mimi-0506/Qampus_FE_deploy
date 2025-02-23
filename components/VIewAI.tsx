'use client';

import {useState} from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa6';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ViewAI({answer}: {answer: string}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-6">
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
