'use client';

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa6';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-2 my-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 flex items-center space-x-1 text-[#424242] rounded disabled:opacity-50"
      >
        <FaAngleLeft />
        <span>Prev</span>
      </button>

      {Array.from({length: totalPages}).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 rounded-full ${
            currentPage === index + 1
              ? 'bg-[#7BA1FF] text-white'
              : 'bg-white text-[#424242]'
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 flex items-center space-x-1 text-[#424242] rounded disabled:opacity-50"
      >
        <span>Next</span>
        <FaAngleRight />
      </button>
    </div>
  );
}
