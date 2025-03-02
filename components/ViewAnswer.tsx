import {answerDetailType} from '@/type';
import Answer from './Answer';
import {useState} from 'react';
import {setAnswerChoice} from '@/app/apis/answerApi';
import ViewAI from './VIewAI';

export default function ViewAnswer({
  answers,
  isMyQuestion,
  questionId,
}: {
  answers: answerDetailType[];
  isMyQuestion: boolean;
  questionId: number;
}) {
  const [chooseAnswerId, setChooseAnswerId] = useState<number | null>(null);

  // 답변 채택
  const handleSelectAnswer = async (answerId: number) => {
    if (!questionId) return;

    //1. 현재 채택된 답변이 있다면 해당 답변은 채택 취소
    if (chooseAnswerId) {
      const response1 = await setAnswerChoice({
        answerId: chooseAnswerId,
        questionId,
        isChosen: false,
      });
      console.log('채택했던 답변 취소', response1);
    }

    //2. 선택된 답변이 채택했었던 답변과 다르다면 채택
    if (chooseAnswerId !== answerId) {
      const response2 = await setAnswerChoice({
        answerId,
        questionId,
        isChosen: true,
      });
      console.log('답변 채택', response2);
    }

    //3.클라이언트측 채택된 답변 수정(낙관적 업데이트)
    setChooseAnswerId(answerId);
  };

  return (
    <>
      {answers.map((nowAnswer: answerDetailType, key) => (
        <>
          <ViewAI questionId={questionId} />
          <Answer
            answer={nowAnswer}
            key={key}
            isMyQuestion={isMyQuestion}
            onSelect={handleSelectAnswer}
          />
        </>
      ))}
    </>
  );
}
