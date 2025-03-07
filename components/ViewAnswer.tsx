import {answerDetailType} from '@/type';
import Answer from './Answer';
import {useState, useEffect, useRef} from 'react';
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
  const [chooseAnswerId, setChooseAnswerId] = useState<number | null>(
    answers?.find(answer => answer.isChosen)?.answerId ?? null,
  );

  const [centeredAnswerIds, setCenteredAnswerIds] = useState<number[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 스크롤 감지해서 중앙에 위치한 여러 개의 답변 찾기
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const newCenteredIds: number[] = [];

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            newCenteredIds.push(
              Number(entry.target.getAttribute('data-answer-id')),
            );
          }
        });

        setCenteredAnswerIds(newCenteredIds);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // 50% 이상 보이면 감지
      },
    );

    answerRefs.current.forEach(answer => {
      if (answer) observer.observe(answer);
    });

    return () => {
      answerRefs.current.forEach(answer => {
        if (answer) observer.unobserve(answer);
      });
    };
  }, [answers]);

  // 답변 채택
  const handleSelectAnswer = async (answerId: number) => {
    if (!questionId) return;

    //1. 현재 채택된 답변이 있다면 해당 답변은 채택 취소
    if (chooseAnswerId) {
      await setAnswerChoice({
        answerId: chooseAnswerId,
        questionId,
        isChosen: false,
      });
    }

    //2. 선택된 답변이 채택했었던 답변과 다르다면 채택
    if (chooseAnswerId !== answerId) {
      await setAnswerChoice({
        answerId,
        questionId,
        isChosen: true,
      });
    }

    //3.클라이언트측 채택된 답변 수정(낙관적 업데이트)
    setChooseAnswerId(answerId);
  };

  return (
    <>
      <ViewAI questionId={questionId} />
      {Array.isArray(answers) &&
        answers.map((nowAnswer, index) => (
          <Answer
            key={nowAnswer.answerId}
            answer={nowAnswer}
            isMyQuestion={isMyQuestion}
            onSelect={handleSelectAnswer}
            chooseAnswerId={chooseAnswerId}
            isCentered={centeredAnswerIds.includes(nowAnswer.answerId)}
            ref={el => (answerRefs.current[index] = el)}
          />
        ))}
    </>
  );
}
