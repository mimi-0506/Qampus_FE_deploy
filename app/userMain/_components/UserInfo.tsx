import Image from 'next/image';

export default function UserInfo() {
  return (
    <>
      <div className="w-full mt-[7.5vw] aspect-[1920/650] bg-usermainbg flex justify-between items-center absolute top-0">
        <Image
          src="/images/user/bg.png"
          width={1920}
          height={650}
          alt="bg"
          className="absolute w-[100vw] asepct-[1920/650] mt-[15vw]"
        />

        <div className="ml-[11vw] text-semiblack relative z-10">
          <h1 className="text-[3.3vw] font-bold ">김하나님, 반가워요!</h1>
          <h3 className="text-[1.875vw]">홍익대학교 시각디자인과 재학 중</h3>
          <div className="flex text-[1.25vw] gap-[2.6vw] ">
            <span className="gap-[0.15vw] flex">
              <p>전체 랭킹 3위 </p>
              <Image
                src="/svg/up_arrow.svg"
                alt="up arrow"
                width={14}
                height={14}
              />
              <p className="text-grey2">3</p>
            </span>
            <span className="gap-[0.3vw] flex">
              <p>학과 랭킹 2위 </p>
              <Image src="/svg/_.svg" alt="dash" width={18} height={18} />
            </span>
          </div>
          <button className="mt-[2.5vw] bg-dark2 text-white text-[1.25vw] flex justify-center items-center rounded-[1vw] aspect-[492/60] w-[25.6vw]">
            나의 소속 랭킹 보기
          </button>
        </div>

        <Image
          src="/images/characters/smile.png"
          width={408}
          height={398}
          className="w-[21vw] h-[20.7vw] aspect-[408/398] mr-[16.5vw]"
          alt="character object-contain"
        />
      </div>

      <div className="relative w-[123vw] aspect-[2365/510] top-[-3vw]">
        <Image
          src="/images/logo/logo_big.png"
          fill
          alt="bg logo"
          sizes="123vw"
        />
      </div>
    </>
  );
}
