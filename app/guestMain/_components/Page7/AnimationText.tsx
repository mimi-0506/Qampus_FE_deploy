'use client';

import useScrollAnimation from '../useScrollAnimation';

export default function AnimationText() {
  const {ref, isVisible} = useScrollAnimation();
  return (
    <>
      <div
        className={`text-[2.5vw] font-bold text-white relative z-10 opacity-0 ${
          isVisible ? 'animate-fadeIn' : ''
        }`}
      >
        Qampus에서 성장하기
      </div>
      <div ref={ref} className="w-full bg-white absolute bottom-[20vw]" />
    </>
  );
}
