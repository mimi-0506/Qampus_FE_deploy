import {Img} from '../Img';
import Background from './Background';
import BottomAnimation from './BottomAnimation';

export default function Page1() {
  return (
    <div className="flew flew-col relative aspect-[16/9] w-screen items-center justify-center overflow-hidden">
      <Background />

      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <Img
          src="/images/characters/wink.png"
          alt="character"
          className="object-contain w-[21vw] aspect-[402/406]"
        />
        <button className="bg-dark2 mt-[3vw] flex w-[21vw] aspect-[404/60] items-center justify-center text-[1.25vw] font-semibold rounded-[20px] text-white ">
          질문 시작하기
        </button>

        <div className="bg-mainlight absolute bottom-0 flex h-[7%] w-full justify-start text-[3%] font-bold">
          <BottomAnimation />
          <BottomAnimation />
        </div>
      </div>
    </div>
  );
}
