import {SORT_OPTIONS} from '@/constants/sortOptions';
import Image from 'next/image';
import {useState} from 'react';

export default function SortSelector() {
  const [sort, setSort] = useState(SORT_OPTIONS[0]);

  const toggleSort = () => {
    setSort(prevSort =>
      prevSort.value === 'latest' ? SORT_OPTIONS[1] : SORT_OPTIONS[0],
    );
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={toggleSort}
    >
      <button className="text-sm font-medium text-black">{sort.label}</button>

      <Image src="/svg/sort.svg" alt="Sort Icon" width={20} height={20} />
    </div>
  );
}
