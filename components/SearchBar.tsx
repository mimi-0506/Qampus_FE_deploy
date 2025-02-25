'use client';

import {IoIosSearch} from 'react-icons/io';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {useSearchStore} from '@/stores/search/searchStore';

export default function SearchBar() {
  const router = useRouter();
  const {query, setQuery} = useSearchStore();
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (query === '' && inputValue !== '') {
      setInputValue('');
    }
  }, [inputValue, query]);

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    setQuery(inputValue);
    router.push('/search');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-[600px] h-[40px] flex items-center border border-[#D9D9D9] text-sm rounded-3xl px-4">
      <input
        type="text"
        className="w-full h-full bg-transparent focus:outline-none text-black pd-2"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
      />
      <IoIosSearch
        className="w-5 h-5 text-black cursor-pointer pd-2"
        onClick={handleSearch}
      />
    </div>
  );
}
