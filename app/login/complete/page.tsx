import Image from 'next/image';

export default function page() {
  return (
    <div className="text-white text-[1.1vw] flex flex-col justify-center items-center">
      <div className="relative aspect-[194/196] w-[10vw] mt-[4.58vw]">
        <Image src="/images/characters/wink.png" fill alt="character" />
      </div>
      <p className="mt-[1.87vw] h-[2.5vw]">로그인 완료!</p>
      <p className="mt-[0.6vw] w-full h-[2.5vw]">
        코미와 함께
        <Image
          src="/images/logo/logo_mini_white.png"
          width={107}
          height={23}
          alt="logo"
          className="inline-block ml-[10px]"
        />
        를 즐겨보세요
      </p>
    </div>
  );
}
