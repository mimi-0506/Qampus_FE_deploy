'use client';

import {FiUpload, FiX} from 'react-icons/fi';
import Image from 'next/image';
import {useState, useCallback} from 'react';
import {setAnswer} from '@/app/apis/answerApi';
import {debounce} from 'lodash';
import {useParams, useRouter} from 'next/navigation';
import {getCookie} from '@/utils/cookie';

export default function WriteAnswer() {
  const {questionId} = useParams<{questionId: string}>();
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const router = useRouter();

  const updateContent = useCallback(
    debounce(text => {
      setContent(text);
      setIsButtonEnabled(!!text.trim());
    }, 50),
    [],
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateContent(event.target.value);
  };

  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      const infoCookie = getCookie('info');
      const info = infoCookie ? JSON.parse(infoCookie) : null;

      const response = await setAnswer({
        userId: info.userId,
        questionId: parseInt(questionId),
        content,
        images,
      });

      console.log(response);

      setContent('');
      setImages([]);
      setIsButtonEnabled(false);

      window.location.reload();
    } catch (e) {
      console.log(e);
      router.push('/login');
    }
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedImages = Array.from(event.target.files);
      setImages([...images, ...uploadedImages]);
    }
  };

  // 이미지 삭제 핸들러
  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col mb-[24vw]">
      <div className="w-[72.6vw] flex flex-col items-center overflow-hidden rounded-[1.6vw] bg-[url('/images/question/write_question_bg.png')] bg-cover bg-center">
        <div className="flex justify-between items-center w-full pt-[1.3vw] px-[1.1vw]">
          <label className="cursor-pointer font-semibold">
            <div className="w-[130px] h-[40px] bg-white text-[#4F7DEE] flex items-center justify-center gap-2 rounded-xl">
              <FiUpload className="text-md" />
              <span className="font-[600] text-sm">이미지 삽입</span>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </label>

          <span className="text-[#606060] text-sm mr-[10px]">
            답변 등록 시 얻을 수 있는 점수는 10점이에요
          </span>
        </div>

        <div className="mt-4 mb-[1.6vw] bg-white rounded-2xl w-[70.9vw] min-h-[21.4vw] p-6 shadow-md border border-blue-100">
          <textarea
            placeholder="내용을 입력해주세요."
            className="w-full mt-2 h-20 resize-none focus:outline-none placeholder:text-[#BBBBBB] text-[#1C1C1C] font-[400] border-none"
            onChange={handleChange}
          />
          {/* 업로드된 이미지 */}
          {images.length > 0 && (
            <div className="relative mt-4 max-h-[300px] overflow-y-auto">
              <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-white to-transparent z-10"></div>

              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-[180px] h-[240px] flex-shrink-0 group"
                  >
                    <Image
                      width={180}
                      height={240}
                      src={URL.createObjectURL(image)}
                      alt={`업로드된 이미지 ${index + 1}`}
                      className="w-[180px] h-[240px] object-cover rounded-lg border"
                    />

                    {/* 이미지 삭제 */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-all duration-300 rounded-lg group-hover:opacity-100 group-hover:bg-opacity-70">
                      <button
                        className="w-10 h-10 flex items-center justify-center bg-[#8D8D8D] text-black rounded-full shadow-lg transition-all duration-300 transform scale-75 group-hover:scale-100"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <FiX size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex mt-[4.2vw] justify-end">
        <button
          className={`mt-4 w-[80vw] max-w-[300px] justify-center py-[1vh] rounded-2xl text-sm font-[600] 
                transition-all duration-300 ease-in-out transform
                ${
                  isButtonEnabled
                    ? 'bg-[#7BA1FF] text-white shadow-md'
                    : 'bg-[#E8E8E8] text-[#8D8D8D] cursor-not-allowed'
                }`}
          onClick={handleSubmit}
          disabled={!isButtonEnabled}
        >
          답변 등록하기
        </button>
      </div>
    </div>
  );
}
