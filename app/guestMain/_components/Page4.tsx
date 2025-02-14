import Image from 'next/image';
export default function Page4() {
  return (
    <div className="w-scree relative flex h-screen items-center justify-center rounded-tl-[80px] rounded-tr-[80px] bg-black text-white">
      <div className="absolute left-[120px] top-[170px]">
        <div className="from-maindark to-mainlight bg-gradient-to-r bg-clip-text text-transparent">
          Answer collection
        </div>
        <h2 className="text-[28px">내가 받은 답변</h2>
      </div>

      <div className="flex w-screen items-center justify-around">
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
