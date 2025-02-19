'use client';

import {FiUpload, FiX} from 'react-icons/fi';
import Image from 'next/image';
import {useState} from 'react';

interface WriteAnswerProps {
  onAddAnswer: (content: string, images: string[]) => void;
}

export default function WriteAnswer({onAddAnswer}: WriteAnswerProps) {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [answerSubmit, setAnswerSubmit] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) return;

    setAnswerSubmit(true);
    console.log('답변 등록:', {content, images});

    onAddAnswer(content, images);

    setTimeout(() => {
      setContent('');
      setImages([]);
      setAnswerSubmit(false);
    }, 500);
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedImages = Array.from(event.target.files).map(file =>
        URL.createObjectURL(file),
      );
      setImages([...images, ...uploadedImages]);
    }
  };

  // 이미지 삭제 핸들러
  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div
        className="relative w-full max-w-[100%] h-full px-3 py-4 rounded-3xl bg-[#D7E3FF]"
        style={{
          backgroundImage: `url('/images/question/write_question_bg.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        {/* 이미지 업로드 버튼 */}
        <div className="flex justify-between items-center">
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

        {/* 입력 필드 컨테이너 */}
        <div className="mt-4 bg-white rounded-2xl p-6 shadow-md border border-blue-100">
          <textarea
            placeholder="내용을 입력해주세요."
            className="w-full mt-2 h-20 resize-none focus:outline-none placeholder:text-[#BBBBBB] text-[#1C1C1C] font-[400] border-none"
            value={content}
            onChange={e => setContent(e.target.value)}
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
                      src={image}
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
      <div className="w-full flex py-4 justify-end">
        <button
          className={`mt-4 w-[80vw] max-w-[300px] justify-center py-[1vh] rounded-2xl text-sm font-[600] 
              transition-all duration-300 ease-in-out transform
              ${
                answerSubmit
                  ? 'bg-[#7BA1FF] text-white shadow-md'
                  : 'bg-[#E8E8E8] text-[#8D8D8D] hover:bg-[#C0C0C0]'
              }`}
          onClick={handleSubmit}
        >
          {answerSubmit ? '등록 완료' : '답변 등록하기'}
        </button>
      </div>
    </div>
  );
}
