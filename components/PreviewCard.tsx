'use client';

import {useState} from 'react';
import {PreviewCardProps} from '@/type';
import {useRouter} from 'next/navigation';
import {getKSTTimeAgo} from '@/utils/dateUtils';

export default function PreviewCard({
  title,
  content,
  answerCount,
  createdDate,
  question_id,
}: PreviewCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = () => {
    setIsLoading(true);
    router.push(`/question/${question_id}`);
  };

  const formattedDate = new Date(createdDate);
  const isValidDate = !isNaN(formattedDate.getTime());

  return (
    <div
      className="w-full bg-white mb-4 rounded-2xl px-6 py-6 border cursor-pointer relative"
      onClick={handleNavigation}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-md font-[600] text-black">{title}</h2>
        {answerCount > 0 && (
          <div
            className="px-5 py-1 rounded-[44px] text-xs font-[300] text-white"
            style={{
              background:
                'linear-gradient(280deg, #A7C0FF 2.25%, #3765D6 100%)',
            }}
          >
            +{answerCount}개의 미확인 답변이 있어요
          </div>
        )}
      </div>

      <p className="text-[13px] text-[#606060] mt-5 line-clamp-2">{content}</p>
      <div className="mt-4 text-xs text-[#606060] font-[0] flex justify-end space-x-2">
        <p>답변 {answerCount}개 ·</p>
        <p>{isValidDate ? getKSTTimeAgo(formattedDate) : '등록일 없음'}</p>
      </div>
    </div>
  );
}
