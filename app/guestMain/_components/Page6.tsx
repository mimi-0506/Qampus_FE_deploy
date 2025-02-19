import Image from 'next/image';

export default function Page6() {
  return (
    <div className="aspect-[16/9] flex flex-col relative w-screen items-center justify-center bg-gradient-to-b from-black to-page6bg">
      <div className="flex flex-col items-center justify-center">
        <div className="from-dark2 to-light1 bg-gradient-to-r bg-clip-text text-[0.94vw] text-transparent">
          Popular Questions
        </div>
        <div className="text-[1.46vw] text-white">금주의 인기 질문</div>
      </div>

      <div className="mt-[8.33vw] flex flex-col w-screen gap-[1.87vw]">
        {/* Card 1 */}
        <div className="relative left-[12.3vw] box-border flex h-[10.83vw] w-[65.38vw] items-center gap-[2.29vw] p-[0.78vw] bg-[url('/images/main/box1_page6.png')] bg-cover bg-center">
          <div className="relative h-[5.57vw] w-[5.06vw]">
            <Image src="/images/main/medal_gold.png" fill alt="medal" />
          </div>
          <div className="flex flex-col gap-[0.94vw]">
            <div className="bg-page6subtitle text-grey4 flex h-[2.14vw] w-[5.57vw] items-center justify-center rounded-[2.66vw] text-[1.04vw]">
              환경
            </div>
            <div className="text-[1.35vw] text-white">
              지속 가능한 환경 기술들을 개발할 때 경제적 타당성과 환경적 이점을
              동시에 충족시키는 방법은 뭔가요?
            </div>
            <div className="text-grey2 text-[1.04vw]">
              조회수 982회 · 나도 궁금해요 215개
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative left-[22.5vw] box-border flex h-[10.83vw] w-[65.38vw] items-center gap-[2.29vw] p-[0.78vw] bg-[url('/images/main/box2_page6.png')] bg-cover bg-center">
          <div className="relative h-[5.57vw] w-[5.06vw]">
            <Image src="/images/main/medal_silver.png" fill alt="medal" />
          </div>
          <div className="flex flex-col gap-[0.94vw]">
            <div className="bg-page6subtitle text-grey4 flex h-[2.14vw] w-[5.57vw] items-center justify-center rounded-[2.66vw] text-[1.04vw]">
              경영
            </div>
            <div className="text-[1.35vw] text-white">
              여행사에서 판매하는 사회적 약자를 위한 관광상품(휠체어 이동
              지원)도 esg 경영을 실천하는 방법일까요?
            </div>
            <div className="text-grey2 text-[1.04vw]">
              조회수 815회 · 나도 궁금해요 174개
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative left-[15vw] box-border flex h-[10.83vw] w-[65.38vw] items-center gap-[2.29vw] p-[0.78vw] bg-[url('/images/main/box2_page6.png')] bg-cover bg-center">
          <div className="relative h-[5.57vw] w-[5.06vw]">
            <Image src="/images/main/medal_bronze.png" fill alt="medal" />
          </div>
          <div className="flex flex-col gap-[0.94vw]">
            <div className="bg-page6subtitle text-grey4 flex h-[2.14vw] w-[5.57vw] items-center justify-center rounded-[2.66vw] text-[1.04vw]">
              디자인
            </div>
            <div className="text-[1.35vw] text-white">
              ai를 활용해서 만든 디자인의 저작권은 제작자에게 있다고 봐야
              하나요?
            </div>
            <div className="text-grey2 text-[1.04vw]">
              조회수 798회 · 나도 궁금해요 155개
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
