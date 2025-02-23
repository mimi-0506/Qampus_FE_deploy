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
  const maxPageButtons = 5;
  const currentGroup = Math.ceil(currentPage / maxPageButtons);
  const startPage = (currentGroup - 1) * maxPageButtons + 1;
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

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

      {Array.from({length: endPage - startPage + 1}).map((_, index) => {
        const pageNum = startPage + index;
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-4 py-2 rounded-full ${
              currentPage === pageNum
                ? 'bg-[#7BA1FF] text-white'
                : 'bg-white text-[#424242]'
            }`}
          >
            {pageNum}
          </button>
        );
      })}

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
