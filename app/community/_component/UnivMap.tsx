import Image from 'next/image';

export default function UnivMap() {
  return (
    <div className="h-screen w-screen">
      <div className="relative w-full h-full z-10 bg-red-500">
        <div className="absolute top-0 left-0 flex gap-[0.6vw]">
          <div className="relative w-[6vw] aspect-[1/1]">
            <Image
              src="/images/characters/wink.png"
              alt="character"
              fill
              className="object-contain w-[21vw] aspect-[402/406]"
            />
          </div>
          <div className="w-[20.5vw] h-[2.7vw] bg-dark1 text-white rounded-[0.6vw] text-[0.9vw] flex justify-center items-center">
            랭킹으로 점수를 높여 학교 영역을 넓혀보세요
          </div>
        </div>
      </div>

      <figure className="highcharts-figure">
        <div id="container"></div>
      </figure>
    </div>
  );
}
