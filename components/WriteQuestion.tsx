'use client';

import {FiUpload, FiX} from 'react-icons/fi';
import Image from 'next/image';
import {useState} from 'react';

interface WriteQuestionProps {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  images: File[];
  setImages: (images: File[]) => void;
}

export default function WriteQuestion({
  title,
  setTitle,
  content,
  setContent,
  images,
  setImages,
}: WriteQuestionProps) {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  // 이미지 업로드 핸들러
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      const newPreviews = fileList.map(file => URL.createObjectURL(file));

      setImages([...images, ...fileList]);
      setPreviewImages([...previewImages, ...newPreviews]);
    }
  };

  // 이미지 삭제 핸들러
  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = previewImages.filter((_, i) => i !== index);

    setImages(updatedImages);
    setPreviewImages(updatedPreviews);
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
        {/* 이미지 업로드 버튼 및 점수 안내 */}
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
            className="w-full mt-2 h-20 resize-none focus:outline-none placeholder:text-[#BBBBBB] text-[#1C1C1C] font-[400] border-none"
            value={content}
            onChange={e => setContent(e.target.value)}
          />

          {/* 업로드된 이미지 */}
          {previewImages.length > 0 && (
            <div className="relative mt-4 max-h-[300px] overflow-y-auto">
              <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-white to-transparent z-10"></div>

              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {previewImages.map((image, index) => (
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
    </div>
  );
}
