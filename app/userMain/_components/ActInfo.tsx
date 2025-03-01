import Cards from './Cards';
import {answerType, questionType} from '@/type';

export default function ActInfo({
  weeklyQuestions,
  popularAnswer,
}: {
  weeklyQuestions: questionType[] | undefined;
  popularAnswer: answerType[] | undefined;
}) {
  return (
    <div
      className="absolute w-full top-[60vw] z-10 pb-[26vw] bg-gradient-to-b 
     from-black to-usermainbg2 text-white rounded-t-[5.2vw] flex flex-col"
    >
      <div className="mt-[8.8vw] flex flex-col justify-center items-center">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          Popular Questions · Answers
        </div>
        <h1 className="mt-[0.9vw] text-[1.46vw]">
          금주에 선별된 인기 질문과 답변이에요
        </h1>
      </div>

      <div className="box-border w-screen mt-[9vw] flex justify-between px-[6.3vw]">
        <div className="w-[14vw]">
          <h2 className="text-[1.46vw]">금주의 인기 질문</h2>
          <p className="text-grey2 text-[1.15vw] mt-[1vw]">
            인기 질문은 나도 궁금해요 수와 조회수를 합산해서 집계돼요
          </p>
        </div>

        <div className="flex gap-[1.5vw]">
          <Cards datas={weeklyQuestions} />
        </div>
      </div>

      <div className="mt-[10.5vw] box-border w-screen flex justify-between px-[6.3vw]">
        <div className="w-[14vw]">
          <h2 className="text-[1.46vw]">금주의 인기 답변</h2>
          <p className="text-grey2 text-[1.15vw] mt-[1vw]">
            인기 답변은 각 답변에 달린 좋아요 수로 집계돼요
          </p>
        </div>

        <div className="flex gap-[1.5vw]">
          <Cards datas={popularAnswer} />
        </div>
      </div>
    </div>
  );
}
