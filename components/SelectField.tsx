'use client';

import {Dispatch, SetStateAction} from 'react';

interface SelectFieldProps {
  selectedField: string;
  setSelectedField: Dispatch<SetStateAction<string>>;
}

export default function SelectField({
  selectedField,
  setSelectedField,
}: SelectFieldProps) {
  const categories = ['전체', '자연계', '인문계', '예체능', '실무', '기타'];

  return (
    <>
      <div className="w-[70%] bg-white flex flex-col rounded-2xl mt-10 grid  ">
        <div className="w-full">
          <p className="text-black font-[700] text-md mb-4">분야</p>
          <div className="flex space-x-3">
            {categories.map(category => (
              <button
                key={category}
                className={`px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium transition-all duration-200
              ${selectedField === category ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                onClick={() => setSelectedField(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-1 mt-6 bg-[#E8E8E8]" />
    </>
  );
}
