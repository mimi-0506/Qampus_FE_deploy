'use client';

import {useState, useEffect} from 'react';
import FieldSelector from './_components/FieldSelector';
import Stepper from './_components/Stepper';
import WriteQuestion from './_components/WriteQuestion';

export default function QuestionCreatePage() {
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  useEffect(() => {
    document.title = '질문 작성하기';
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen px-16 py-10 bg-white">
      <div className="flex w-full gap-6">
        <div className="w-[200px]">
          {/* 현재 클릭된 Step 전달 */}
          <Stepper selectedStep={selectedStep} />
        </div>

        <div className="w-[1400px] flex flex-col gap-4">
          {/* 클릭 시 Step 1 활성화 */}
          <div onClick={() => setSelectedStep(1)}>
            <FieldSelector
              selectedField={selectedField}
              setSelectedField={setSelectedField}
            />
          </div>

          {/* 클릭 시 Step 2 활성화 */}
          <div onClick={() => setSelectedStep(2)}>
            <WriteQuestion />
          </div>
        </div>
      </div>
    </main>
  );
}
