import Image from 'next/image';

const COMMENTS = [
  '#대학생들을 위한 자유로운 질문과 답변',
  '#매주 인기 질문과 답변 선별 제공',
  '#학교별 랭킹 확인, 대전과 챌린지로 순위 도전',
];
export default function Page1() {
  const BottomAnimation = () => {
    return (
      <div
        className=" text-maindark gap-[55px] shrink-0 animate-loop
      flex justify-start items-center pr-[100px]"
      >
        <Image
          src="/images/logo/logo_mini.png"
          width={135}
          height={29}
          alt="logo"
        />
        <Image
          src="/images/main/bottom_arrow.png"
          width={123}
          height={15}
          alt="arrow"
        />
        {COMMENTS.map((comment, index) => {
          return (
            <div className="whitespace-nowrap w-fit " key={index}>
              {comment}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative w-screen h-screen flew flew-col justify-center items-center overflow-hidden">
      {/* 백그라운드 */}
      <div className="absolute top-0 w-full h-screen z-0">
        <div className="relative h-1/2 top-[215px] left-[123px]">
          <Image
            src="/images/main/background_page1_1.png"
            fill
            alt="bg text"
            className="object-contain"
          />
        </div>
        <div className="relative h-1/2 top-[215px] right-[120px]">
          <Image src="/images/main/background_page1_2.png" fill alt="bg text" />
        </div>

        <Image
          src="/images/main/gradient_page1.png"
          width={1700}
          height={750}
          alt=""
          className="absolute bottom-[-300px] left-[100px]"
        />
      </div>

      {/* 내용물 */}
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-center items-center overflow-hidden">
        <Image
          src="/images/characters/wink.png"
          width={405}
          height={408}
          alt={'character'}
        />
        <button
          className="bg-maindark w-[404px] h-[60px] rounded-[20px] mt-[64px]
  flex justify-center items-center text-white text-[24px] font-semibold
  hover:bg-mainlight transition-colors duration-200"
        >
          질문 시작하기
        </button>

        <div className="absolute bottom-0 text-3xl w-full font-bold flex justify-start bg-mainlight h-[74px]">
          <BottomAnimation />
          <BottomAnimation />
        </div>
      </div>
    </div>
  );
}
