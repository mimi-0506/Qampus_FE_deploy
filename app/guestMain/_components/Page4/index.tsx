import Image from 'next/image';
import AnimationText from './AnimationText';

export default function Page4() {
  return (
    <div
      className="relative z-10 flex aspect-[16/6] w-screen items-center justify-center
     rounded-tl-[4.17vw] rounded-tr-[4.17vw] bg-black text-white"
    >
      <div className="absolute left-[6.25vw] top-[8.85vw]">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          Answer collection
        </div>
        <h2 className="text-[1.46vw]">내가 받은 답변</h2>
      </div>

      <div className="flex w-screen items-center absolute top-[20.88vw] justify-around">
        <div className="relative w-[14vw] aspect-[275/204]">
          <Image
            src="/images/main/bubbles.png"
            fill
            sizes="14vw"
            alt="bubble"
          />
        </div>

        <AnimationText />
      </div>
    </div>
  );
}
