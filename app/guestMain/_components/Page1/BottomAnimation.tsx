import {Img} from '../Img';

const COMMENTS = [
  '#대학생들을 위한 자유로운 질문과 답변',
  '#매주 인기 질문과 답변 선별 제공',
  '#학교별 랭킹 확인, 대전과 챌린지로 순위 도전',
];

export default function BottomAnimation() {
  return (
    <div className="text-maindark flex shrink-0 animate-loop items-center justify-start gap-[3%] pr-[5%]">
      <Img
        src="/images/logo/logo_mini.png"
        alt="logo"
        className="w-[7%] h-[3%]"
      />
      <Img
        src="/images/main/bottom_arrow.png"
        alt="arrow"
        className="w-[6%] h-[1%]"
      />
      {COMMENTS.map((comment, index) => {
        return (
          <div className="w-fit whitespace-nowrap" key={index}>
            {comment}
          </div>
        );
      })}
    </div>
  );
}
