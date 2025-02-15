'use client';

import {useState} from 'react';
import {FiUpload, FiX} from 'react-icons/fi';
import Image from 'next/image';

export default function WriteQuestion() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [questionSubmit, setQuestionSubmit] = useState(false);

  // 이미지 업로드 핸들러
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedImages = Array.from(event.target.files).map(file =>
        URL.createObjectURL(file),
      );
      setImages(prevImages => [...prevImages, ...uploadedImages]);
    }
  };

  // 이미지 삭제 핸들러
  const handleRemoveImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div
        className="relative w-full px-3 py-6 rounded-2xl"
        style={{
          backgroundImage: `url('/images/question/question_bg.png')`,

          backgroundPosition: 'center',
        }}
      >
        {/* 이미지 업로드 버튼 및 점수 안내 */}
        <div className="flex justify-between items-center">
          <label className="cursor-pointer font-semibold">
            <div className="w-[120px] h-[40px] bg-white text-[#4F7DEE] flex items-center justify-center gap-2 rounded-lg ">
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
            질문 등록 시 얻을 수 있는 점수는 10점이에요
          </span>
        </div>

        {/* 입력 필드 컨테이너 */}
        <div className="mt-4 bg-white rounded-2xl p-6 shadow-md border border-blue-100">
          {/* 제목 입력 */}
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            className="w-full text-lg placeholder:text-[#606060] text-[#1C1C1C] font-[600] focus:outline-none border-none"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <hr className="w-full h-0.5 border-t-[0.3px] border-[#BBBBBB] my-3" />

          {/* 내용 입력 */}
          <textarea
            placeholder="내용을 입력해주세요."
            className="w-full mt-2 h-32 resize-none focus:outline-none placeholder:text-[#BBBBBB] text-[#1C1C1C] font-[400] border-none"
            value={content}
            onChange={e => setContent(e.target.value)}
          />

          {/* 업로드된 이미지 미리보기 */}
          {images.length > 0 && (
            <div className="mt-4">
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <Image
                      width={20}
                      height={10}
                      src={image}
                      alt={`업로드된 이미지 ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                    {/* 삭제 버튼 */}
                    <button
                      className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* 질문 등록 버튼 */}
      <div className="w-full flex justify-end">
        <button
          className="mt-10 w-[300px] justify-center ${questionSubmit ? bg-blue-500 : bg-pink-500} text-white py-2 rounded-2xl text-md font-[600] hover:bg-blue-600 transition"
          onClick={() => setQuestionSubmit(true)}
        >
          {questionSubmit ? '등록 완료' : '질문 등록하기'}
        </button>
      </div>
    </div>
  );
}
