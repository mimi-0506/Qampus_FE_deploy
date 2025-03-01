'use client';
import {Dispatch, SetStateAction} from 'react';

interface FieldSelectorProps {
  selectedField: number | null;
  setSelectedField: Dispatch<SetStateAction<number | null>>;
}

const categoryMap: {name: string; id: number}[] = [
  {name: '자연계', id: 2},
  {name: '인문계', id: 3},
  {name: '예체능', id: 4},
  {name: '실무', id: 5},
  {name: '기타', id: 6},
];

export default function FieldSelector({
  selectedField,
  setSelectedField,
}: FieldSelectorProps) {
  return (
    <div className="bg-white w-full flex flex-col items-center rounded-2xl justify-center shadow-[0_0_2px_0_rgba(0,0,0,0.15)]">
      <div className="w-full px-[30px] py-[30px]">
        <p className="font-semibold text-md text-black">분야를 지정해주세요</p>

        <div className="flex space-x-3 mt-5">
          {categoryMap.map(({name, id}) => (
            <button
              key={id}
              className={`px-[20px] py-2 rounded-lg border border-[0.5px] border-[#D9D9D9] text-sm font-medium transition-colors duration-200
                    ${selectedField === id ? 'bg-[#7BA1FF] text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedField(id)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
