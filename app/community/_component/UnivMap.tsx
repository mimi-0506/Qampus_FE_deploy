import Image from 'next/image';

export default function UnivMap() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0">
        <div className="relative">
          <Image
            src="/images/characters/wink.png"
            alt="character"
            className="object-contain w-[21vw] aspect-[402/406]"
          />
        </div>
        <div>랭킹으로 점수를 높여 학교 영역을 넓혀보세요</div>
      </div>
    </div>
  );
}
