import LeftBox1 from '@/components/ranking/LeftBox1';
import LeftBox2 from '@/components/ranking/LeftBox2';
import RankBox from '@/components/ranking/RankBox';
import Slider from '@/components/ranking/Slider';
import Image from 'next/image';

export default function Info() {
  return (
    <div className="w-screen">
      <div className="flex flex-col top-[10vw] relative aspect-[16/10] w-screen items-center bg-black">
        <Image
          src="/images/main/bg_page5.png"
          width={1679}
          height={514}
          alt="bg"
          className="absolute z-0 top-[-17vw]"
        />

        <Slider top={'top-[29vw]'} />

        <div className="flex flex-col items-center justify-center relative z-10">
          <h1 className="text-white text-[1.875vw]">
            대전과 챌린지로 학교 순위 올리기
          </h1>
          <p className="text-grey2 text-[1vw] mt-[0.6vw]">
            현재 상위 학교들의 랭킹과 순위 지표를 확인하고 대전을 통해 순위를
            올려보세요!
          </p>

          <div className="mt-[2.8vw] w-[43vw] aspect-[837/67] relative text-[1vw] text-white border border-communityGrey rounded-[3vw] flex justify-center items-center">
            학교 이름을 검색해보세요
            <div className="absolute w-[1.2vw] aspect-[1/1] right-[1vw]">
              <Image fill src="/svg/search.svg" alt={'search'} />
            </div>
          </div>
        </div>

        <div className="relative mt-[10.6vw] w-screen flex justify-center items-center] z-30">
          <div className="absolute left-[6.25vw] flex flex-col gap-[3.28vw]">
            <LeftBox1 />
            <LeftBox2 />
          </div>

          <RankBox mode={true} />
        </div>
      </div>
    </div>
  );
}
