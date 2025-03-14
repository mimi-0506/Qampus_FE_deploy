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
    answers?.find(answer => answer.is_chosen)?.answerId ?? null,
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      answerRefs.current.forEach(answer => {
        if (answer) observer.unobserve(answer);
      });
    };
  }, [answers]);

  // 답변 채택
  const handleSelectAnswer = async (answerId: number) => {
    if (!questionId) return;

    const isCancelling = chooseAnswerId === answerId;
    setChooseAnswerId(isCancelling ? null : answerId);

    try {
      // 기존에 선택된 답변이 있으면 취소
      if (chooseAnswerId) {
        await setAnswerChoice({
          answerId: chooseAnswerId,
          questionId,
          isChosen: false,
        });
      }

      // 새로운 답변을 선택 (취소하는 경우 건너뛰기)
      if (!isCancelling) {
        await setAnswerChoice({
          answerId,
          questionId,
          isChosen: true,
        });
      }
    } catch (error) {
      console.error('답변 채택 처리 실패:', error);
      // 오류 발생 시 원래 상태로 롤백
      setChooseAnswerId(chooseAnswerId);
    }
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
            ref={el => {
              answerRefs.current[index] = el;
            }}
          />
        ))}
    </>
  );
}
