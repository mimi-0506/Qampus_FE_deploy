'use client';

import {IoIosSearch} from 'react-icons/io';
import {useRouter} from 'next/navigation';
import {useRef} from 'react';

export default function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      const value = inputRef.current.value.trim();
      console.log(value);
      if (value) router.push(`/search?q=${value}`);
    }
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="w-[600px] h-[40px] flex items-center border border-[#D9D9D9] text-sm rounded-3xl px-4">
      <input
        ref={inputRef}
        type="text"
        className="w-full h-full bg-transparent focus:outline-none text-black pd-2"
        onKeyDown={handleOnEnter}
      />
      <IoIosSearch
        className="w-5 h-5 text-black cursor-pointer pd-2"
        onClick={handleSearch}
      />
    </div>
  );
}
