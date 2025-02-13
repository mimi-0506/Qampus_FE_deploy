import Image from 'next/image';
export default function Page2() {
  return (
    <div className="w-full h-screen flex justify-between items-center">
      <div className="ml-[118px] flex flex-col justify-between items-start h-[238]">
        <div className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-maindark to-mainlight">
          About Qampus
        </div>
        <div className="text-[64px] font-semibold">
          다양한 사람들과 지식을 나누고 <br />
          경쟁하며 함께 성장하는 서비스
        </div>
        <div className="text-[20px] text-mainpage2gray ">
          자유로운 질문과 답변으로 서로의 지식을 공유하고 학교 별 선의의 경쟁을
          통해 지식 성장을 도모해요
        </div>
      </div>
      <Image
        className="mr-[392px]"
        src="/images/characters/smile.png"
        width={357}
        height={360}
        alt=""
      />
    </div>
  );
}
