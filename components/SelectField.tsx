'use client';

import {CATEGORIES} from '@/constants/field';
import {Dispatch, SetStateAction} from 'react';

interface SelectFieldProps {
  selectedField: number;
  setSelectedField: Dispatch<SetStateAction<number>>;
}

export default function SelectField({
  selectedField,
  setSelectedField,
}: SelectFieldProps) {
  return (
    <>
      <div className="w-[70%] bg-white flex flex-col rounded-2xl mt-10">
        <div className="w-full">
          <p className="text-black font-[700] text-md mb-4">분야</p>
          <div className="flex space-x-3">
            {CATEGORIES.map((category, key) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium transition-all duration-200
              ${CATEGORIES[selectedField] === category ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                onClick={() => setSelectedField(key)}
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
