'use client';
import {Dispatch, SetStateAction} from 'react';

interface FieldSelectorProps {
  selectedField: string | null;
  setSelectedField: Dispatch<SetStateAction<string | null>>;
}

export default function FieldSelector({
  selectedField,
  setSelectedField,
}: FieldSelectorProps) {
  const categories = ['자연계', '인문계', '예체능', '실무', '기타'];

  return (
    <div className="bg-white w-full flex flex-col items-center rounded-2xl justify-center shadow-[0_0_2px_0_rgba(0,0,0,0.15)]">
      <div className="w-full px-[30px] py-[30px]">
        <p className="font-semibold text-md text-black">분야를 지정해주세요</p>

        {/* 분야 리스트 */}
        <div className="flex space-x-3 mt-5">
          {categories.map(category => (
            <button
              key={category}
              className={`px-[20px] py-2 rounded-lg border border-[0.5px] border-[#D9D9D9] text-sm font-medium transition-colors duration-200
                    ${selectedField === category ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedField(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
