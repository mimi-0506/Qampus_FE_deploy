import LeftBox1 from '@/components/ranking/LeftBox1';
import LeftBox2 from '@/components/ranking/LeftBox2';
import RightBox1 from '@/components/ranking/RightBox1';
import Slider from '@/components/ranking/Slider';
import Image from 'next/image';

export default function Info() {
  return (
    <div className="flex flex-col relative aspect-[16/10] w-screen items-center bg-black">
      <Image
        src="/images/main/bg_page5.png"
        width={1679}
        height={514}
        alt="bg"
        className="absolute z-0 top-[-24vw]"
      />

      <Slider />

      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          대전과 챌린지로 학교 순위 올리기 현재 상위 학교들의 랭킹과 순위 지표를
          확인하고 대전을 통해 순위를 올려보세요!
        </div>

        <div>학교 이름을 검색해보세요요</div>
      </div>

      <div className="relative mt-[10.6vw] w-screen flex justify-center items-center] z-30">
        <div className="absolute left-[6.25vw] flex flex-col gap-[3.28vw]">
          <LeftBox1 />
          <LeftBox2 />
        </div>

        <RightBox1 />
      </div>
    </div>
  );
}
