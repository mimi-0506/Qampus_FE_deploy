'use client';

import {useEffect, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import FieldSelector from './_components/FieldSelector';
import Stepper from './_components/Stepper';
import WriteQuestion from '@/components/WriteQuestion';
import {editQuestion, setQuestion} from '../../apis/questionApi';
import toast from 'react-hot-toast';
import {getAnswerDetail} from '@/app/apis/answerApi';

export default function QuestionCreatePage() {
  const router = useRouter();
  const [selectedField, setSelectedField] = useState<number | null>(null);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [questionSubmit, setQuestionSubmit] = useState(false);

  const searchParams = useSearchParams();
  const edit = searchParams.get('edit');

  useEffect(() => {
    if (edit) setEdit(parseInt(edit));
  }, [edit]);

  const setEdit = async (edit: number) => {
    const response = await getAnswerDetail(edit);
    console.log(response);

    setTitle(response.title);
    setImages(response.images);
    setContent(response.content);
    setSelectedField(response.categoryId - 1);
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      toast('제목과 내용을 입력해주세요.');
      return;
    } else if (!selectedField) {
      toast('분야를 선택해주세요.');
      return;
    }

    setQuestionSubmit(true);
    console.log('질문 등록하기:', {title, content, images, selectedField});

    try {
      const response = edit
        ? await editQuestion({
            questionId: parseInt(edit),
            categoryId: selectedField,
            title,
            content,
          })
        : await setQuestion({
            categoryId: selectedField,
            title,
            content,
            images,
          });

      console.log('📌 API 응답:', response);

      router.push(`/question/questionLoading?q=${response.questionId || edit}`);
    } catch (error) {
      console.error('❌ API 호출 오류:', error);
    }
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center px-[4vw] py-[5vh] bg-white">
      <div className="flex w-full max-w-[1200px] gap-[3vw] flex-wrap justify-center">
        <div className="w-[20vw] max-w-[200px] min-w-[150px]">
          <Stepper selectedStep={selectedStep} />
        </div>

        <div className="w-full max-w-[800px] flex flex-col gap-[3vh]">
          {/* Step 1 */}
          <div onClick={() => setSelectedStep(1)}>
            <FieldSelector
              selectedField={selectedField}
              setSelectedField={setSelectedField}
            />
          </div>

          {/* Step 2 */}
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

          <div className="w-full flex justify-end">
            <button
              className={`mt-4 w-[80vw] max-w-[300px] justify-center py-[1vh] rounded-2xl text-sm font-[600] 
                transition-all duration-300 ease-in-out transform
               bg-[#E8E8E8] text-[#8D8D8D] hover:bg-[#7BA1FF] hover:text-white`}
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
