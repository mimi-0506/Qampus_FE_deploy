import {memo} from 'react';

function LeftBox1({isVisible}: {isVisible: boolean}) {
  return (
    <div
      className={`
        opacity-0 ${isVisible ? 'animate-fadeIn' : ''}
        box-border flex h-[11.5vw] w-[21.8vw] flex-col gap-3 p-[1.77vw]
        bg-[url('/images/main/box1_page5.webp')] bg-contain bg-no-repeat
      `}
    >
      <h2 className="text-[0.9vw] text-white">팀 대전</h2>
      <p className="text-grey3 text-[0.78vw]">
        학교별 팀 퀴즈 대전!
        <br />
        지식 대결로 점수를 얻어 랭킹을 올려봐요!
      </p>
    </div>
  );
}

export default memo(LeftBox1);
