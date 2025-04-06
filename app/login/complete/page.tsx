import Image from 'next/image';

export default function page() {
  return (
    <div className="text-white text-[1.1vw] flex flex-col justify-center items-center">
      <div className="relative aspect-[194/196] w-[10vw] mt-[4.58vw]">
        <Image
          src="/images/characters/wink.png"
          sizes="10vw"
          fill
          alt="character"
        />
      </div>
      <p className="mt-[1.87vw] h-[2.5vw]">로그인 완료!</p>
      <div className="flex w-full justify-center items-center">
        <p className="mr-[0.6vw]">코미와 함께 </p>
        <div className="w-[5.56vw] h-[1.2vw] top-[0.1vw] relative flex justify-center items-center">
          <Image src="/images/logo/logo_mini_white.png" fill alt="logo" />
        </div>
        <p>를 즐겨보세요</p>
      </div>
    </div>
  );
}
