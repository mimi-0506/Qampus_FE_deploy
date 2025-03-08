'use client';

import useScrollAnimation from '../useScrollAnimation';

export default function AnimationText() {
  const {ref, isVisible} = useScrollAnimation();

  return (
    <>
      <div
        className={`text-[1.67vw] relative top-[-1.5vw]
          opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
      >
        Qampus에서는 자신이 질문한 내용에 달린 답변들을 모아서 확인할 수 있어요
        <br />
        지금까지 모인 답변들을 확인해볼까요?
      </div>
      <div ref={ref} className="w-full absolute bottom-[15vw]" />
    </>
  );
}
