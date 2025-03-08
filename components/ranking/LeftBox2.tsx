'use client';

export default function LeftBox2({isVisible}: {isVisible: boolean}) {
  return (
    <>
      <div
        className={`box-border flex h-[11.5vw] w-[21.8vw] flex-col gap-3 p-[1.77vw]
      opacity-0 ${isVisible ? 'animate-fadeIn' : ''}
    bg-[url('/images/main/box2_page5.png')] bg-contain bg-no-repeat`}
      >
        <h2 className="text-[0.9vw] text-white">팀 대전</h2>
        <p className="text-grey3 text-[0.78vw]">
          챌린지 이벤트
          <br />
          특정 기간 동안 가장 많은 점수를 <br />
          얻은 사용자에게 보상을 제공해요!
        </p>
      </div>
    </>
  );
}
