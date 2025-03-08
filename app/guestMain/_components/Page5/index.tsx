'use client';

import Image from 'next/image';
import Slider from '../../../../components/ranking/Slider';
import LeftBox1 from '../../../../components/ranking/LeftBox1';
import LeftBox2 from '../../../../components/ranking/LeftBox2';
import RankBox from '../../../../components/ranking/RankBox';
import {useEffect, useState} from 'react';
import {getRank} from '@/app/apis/rankApi';
import {universityType} from '@/type';
import useScrollAnimation from '../useScrollAnimation';

export default function Page5() {
  const {ref, isVisible} = useScrollAnimation();
  const [data, setData] = useState<universityType[] | []>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getRank('weekly');
    setData(data);
  };

  return (
    <div className="flex flex-col relative w-screen items-center bg-black">
      {/* background */}
      <div className="relative w-full h-auto aspect-[1920/1498] z-0 top-0">
        <Image src="/images/main/bg_page5.png" fill alt="bg" />
      </div>

      <div className="absolute top-[46vw] left-0">
        <Slider data={data} />
      </div>

      <div className="absolute top-[25vw] left-[6.5vw] z-10">
        <div className="relative w-[87.5vw] aspect-[1680/830]">
          <Image src="/images/main/overlay_page5.png" alt="bg" fill />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center absolute top-[21vw] z-10">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          Ranking
        </div>
        <div className="text-white text-[1.46vw] mt-[1.35vw]">학교 별 순위</div>
      </div>

      <div className="absolute top-[40vw] w-screen flex justify-center items-center] z-30">
        <div className="absolute left-[6.25vw] flex flex-col gap-[3.28vw]">
          <LeftBox1 isVisible={isVisible} />
          <LeftBox2 isVisible={isVisible} />
        </div>

        <RankBox universities={data} isVisible={isVisible} />
      </div>

      <div ref={ref} className="w-full bg-white absolute bottom-[20vw]" />
    </div>
  );
}
