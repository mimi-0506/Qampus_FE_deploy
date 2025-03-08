import Image from 'next/image';

const COMMENTS = [
  '#대학생들을 위한 자유로운 질문과 답변',
  '#매주 인기 질문과 답변 선별 제공',
  '#학교별 랭킹 확인, 대전과 챌린지로 순위 도전',
];

export default function BottomAnimation() {
  return (
    <div className="text-dark2 bg-page1anibg flex shrink-0 animate-loop items-center justify-start gap-[3vw] pr-[5vw]">
      <div className="w-[8vw] aspect-[155/30] relative">
        <Image src="/images/logo/logo_mini_dark.png" alt="logo" fill />
      </div>

      <div className="w-[6vw] h-[1vw] bottom-[0.4vw] relative flex justify-center items-center">
        <Image src="/images/main/bottom_arrow.png" alt="arrow" fill />
      </div>
      {COMMENTS.map((comment, index) => {
        return (
          <div className="w-fit whitespace-nowrap text-[1.45vw]" key={index}>
            {comment}
          </div>
        );
      })}
    </div>
  );
}
