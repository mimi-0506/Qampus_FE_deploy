import Image from 'next/image';

export default function UserInfo() {
  return (
    <>
      <div className="w-full mt-[7.5vw] aspect-[1920/650] bg-usermainbg flex justify-between items-center absolute top-0">
        <div className="ml-[15.7vw] text-semiblack">
          <h1 className="text-[3.3vw] font-bold ">김하나님, 반가워요!</h1>
          <h3 className="text-[1.875vw]">홍익대학교 시각디자인과 재학 중</h3>
          <div className="flex text-[1.25vw] gap-[2.6vw]">
            <p>전체 랭킹 3위</p> <p>학과 랭킹 2위</p>
          </div>
          <button className="mt-[2.5vw] bg-main text-white text-[1.25vw] flex justify-center items-center rounded-[1vw] aspect-[492/60] w-[25.6vw]">
            나의 소속 랭킹 보기
          </button>
        </div>
        <div className="relative w-[21vw] h-[20.7vw] aspect-[408/398] mr-[16.5vw]">
          <Image
            src="/images/characters/smile.png"
            fill
            sizes="21vw"
            alt="character object-contain"
          />
        </div>
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
