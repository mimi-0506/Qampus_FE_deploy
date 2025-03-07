import Image from 'next/image';

export default function Page2() {
  return (
    <div className="flex aspect-[16/9] w-screen items-center justify-between">
      <div className="ml-[6vw] flex aspect-[764/160] w-[40vw] flex-col items-start justify-between">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          About Qampus
        </div>
        <div className="text-[3.3vw] leading-[4vw] tracking-[0.2%] font-semibold">
          다양한 사람들과 지식을 나누고 경쟁하며 함께 성장하는 서비스
        </div>
        <div className="text-grey2 text-[1vw]">
          자유로운 질문과 답변으로 서로의 지식을 공유하고 학교 별 선의의 경쟁을
          통해 지식 성장을 도모해요
        </div>
      </div>

      <div className="relative w-[18.5vw] aspect-[357/360] mr-[20.4vw]">
        <Image
          src="/images/characters/smile.png"
          width={357}
          height={360}
          alt=""
        />
      </div>
    </div>
  );
}
