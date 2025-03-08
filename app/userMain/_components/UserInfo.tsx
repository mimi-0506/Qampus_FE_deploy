import {userHomeDtoType} from '@/type';
import Image from 'next/image';
import RankChecker from './RankChecker';

export default function UserInfo({
  userHomeDto,
}: {
  userHomeDto: userHomeDtoType | undefined;
}) {
  return (
    <div className="bg-white w-full h-[70vw] absolute top-0">
      <div className="w-full mt-[7.5vw] aspect-[1920/650] bg-usermainbg flex justify-between items-center absolute top-0">
        <Image
          src="/images/user/bg.png"
          width={1920}
          height={650}
          alt="bg"
          className="absolute w-[100vw] asepct-[1920/650] mt-[15vw]"
        />

        <div className="ml-[11vw] text-semiblack relative z-10">
          <h1 className="text-[3.3vw] font-semibold ">
            {userHomeDto?.name}님, 반가워요!
          </h1>
          <h3 className="text-[1.875vw] font-medium">
            {userHomeDto?.universityName} {userHomeDto?.major}
          </h3>
          <div className="flex text-[1.25vw] gap-[2.6vw] leading-[2.24vw] tracking-[-0.072vw]">
            <span className="gap-[0.15vw] flex font-medium items-center">
              <p>전체 랭킹 {userHomeDto?.this_month_ranking}위 </p>
              <RankChecker
                lastRank={userHomeDto?.last_month_ranking}
                thisRank={userHomeDto?.this_month_ranking}
              />
            </span>
            <span className="gap-[0.3vw] flex  items-center">
              <p>학과 랭킹 {userHomeDto?.this_month_major_ranking}위 </p>
              <RankChecker
                lastRank={userHomeDto?.last_month_major_ranking}
                thisRank={userHomeDto?.this_month_major_ranking}
              />
            </span>
          </div>
          <button className="mt-[2.5vw] bg-dark2 text-white text-[1.25vw] flex justify-center items-center rounded-[0.9vw] aspect-[469/60] w-[24.4vw]">
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

      <div className="absolute z-10 w-[123vw] aspect-[2365/510] top-[44.5vw]">
        <Image
          src="/images/logo/logo_big.svg"
          fill
          alt="bg logo"
          sizes="123vw"
        />
      </div>
    </div>
  );
}
