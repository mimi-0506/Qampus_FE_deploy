import Image from 'next/image';
export default function Page4() {
  return (
    <div className="rounded-tl-[80px] text-white rounded-tr-[80px] w-scree h-screen relative flex justify-center items-center bg-black">
      <div className="absolute top-[170px] left-[120px]">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-maindark to-mainlight">
          Answer collection
        </div>
        <h2 className="text-[28px">내가 받은 답변</h2>
      </div>

      <div className="w-screen flex justify-around items-center">
        <Image
          src="/images/main/bubbles.png"
          width={275}
          height={204}
          alt="bubble"
        />

        <div className="text-[36px]">
          Qampus에서는 자신이 질문한 내용에 달린 답변들을 모아서 확인할 수
          있어요
          <br />
          지금까지 모인 답변들을 확인해볼까요?
        </div>
      </div>
    </div>
  );
}
