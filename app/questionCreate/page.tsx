'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import FieldSelector from './_components/FieldSelector';
import Stepper from './_components/Stepper';
import WriteQuestion from './_components/WriteQuestion';

export default function QuestionCreatePage() {
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [questionSubmit, setQuestionSubmit] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    } else if (!selectedField) {
      alert('분야를 선택해주세요.');
      return;
    }

    setQuestionSubmit(true);
    console.log('질문 등록하기:', {title, content, images});
    // API 호출

    setTimeout(() => {
      router.push('/questionLoading');
    }, 1000);
  };

  return (
    <main className="flex w-full h-full flex-col items-center min-h-screen px-16 py-10 bg-white">
      <div className="flex w-full max-w-screen-xl gap-6">
        <div className="w-[200px]">
          {/* 현재 클릭된 Step 전달 */}
          <Stepper selectedStep={selectedStep} />
        </div>

        <div className="w-full max-w-screen-lg flex flex-col gap-4">
          {/* 클릭 시 Step 1 활성화 */}
          <div onClick={() => setSelectedStep(1)}>
            <FieldSelector
              selectedField={selectedField}
              setSelectedField={setSelectedField}
            />
          </div>

          {/* 클릭 시 Step 2 활성화 */}
          <div onClick={() => setSelectedStep(2)}>
            <WriteQuestion
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
              images={images}
              setImages={setImages}
            />
          </div>

          {/* 질문 등록 버튼 */}
          <div className="w-full max-w-[100%] flex justify-end">
            <button
              className={`mt-4 w-[300px] justify-center py-2 rounded-2xl text-md font-[600] 
      transition-all duration-300 ease-in-out transform
      ${
        questionSubmit
          ? 'bg-[#7BA1FF] text-white shadow-md'
          : 'bg-[#E8E8E8] text-[#8D8D8D] hover:bg-[#C0C0C0]'
      }`}
              onClick={handleSubmit}
            >
              {questionSubmit ? '등록 완료' : '질문 등록하기'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
