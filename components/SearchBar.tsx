'use client';

import {IoIosSearch} from 'react-icons/io';
import {useRouter, useSearchParams} from 'next/navigation';
import {useState, useEffect} from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get('q') || '');

  const handleSearch = () => {
    if (inputValue.trim()) {
      router.push(`/search?q=${inputValue.trim()}`);
    }
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  useEffect(() => {
    setInputValue(searchParams.get('q') || '');
  }, [searchParams]);

  return (
    <div className="w-[600px] mt-[2vw] h-[40px] flex items-center border border-[#D9D9D9] text-sm rounded-3xl px-4 mb-[3vw]">
      <input
        type="text"
        className="w-full h-full bg-transparent focus:outline-none text-black pd-2"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleOnEnter}
      />
      <IoIosSearch
        className="w-5 h-5 text-black cursor-pointer pd-2"
        onClick={handleSearch}
      />
    </div>
  );
}
