'use client';

import {PreviewCardProps} from '@/type';
// import {formatDistanceToNow} from 'date-fns';
// import {ko} from 'date-fns/locale';

export default function PreviewCard({
  title,
  content,
  answerCount,
  createdDate,
}: PreviewCardProps) {
  // 시간 포맷 (UTC → KST 변환 후 상대 시간으로 표시)
  const getKSTTimeAgo = (utcDate: string) => {
    return utcDate; //에러나서 우선 이렇게 해뒀습니다!
    // const kstDate = new Date(new Date(utcDate).getTime() + 9 * 60 * 60 * 1000);
    // return formatDistanceToNow(kstDate, {addSuffix: true, locale: ko});
  };

  return (
    <div className="w-full bg-white mb-4 rounded-2xl px-6 py-6 border">
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
        <p>{getKSTTimeAgo(createdDate)}</p>
      </div>
    </div>
  );
}
