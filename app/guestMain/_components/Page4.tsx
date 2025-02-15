import Image from 'next/image';

export default function Page4() {
  return (
    <div className="relative flex aspect-[16/9] w-screen items-center justify-center rounded-tl-[4.17vw] rounded-tr-[4.17vw] bg-black text-white">
      <div className="absolute left-[6.25vw] top-[8.85vw]">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          Answer collection
        </div>
        <h2 className="text-[1.46vw]">내가 받은 답변</h2>
      </div>

      <div className="flex w-screen items-center justify-around">
        <div className="w-[14vw] aspect-[275/204]">
          <Image
            src="/images/main/bubbles.png"
            width={275}
            height={204}
            alt="bubble"
          />
        </div>
        <div className="text-[1.87vw]">
          Qampus에서는 자신이 질문한 내용에 달린 답변들을 모아서 확인할 수
          있어요
          <br />
          지금까지 모인 답변들을 확인해볼까요?
        </div>
      </div>
    </div>
  );
}
