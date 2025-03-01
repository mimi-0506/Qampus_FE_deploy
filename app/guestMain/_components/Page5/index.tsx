'use client';

import Image from 'next/image';
import Slider from '../../../../components/ranking/Slider';
import LeftBox1 from '../../../../components/ranking/LeftBox1';
import LeftBox2 from '../../../../components/ranking/LeftBox2';
import RankBox from '../../../../components/ranking/RankBox';
import {useEffect, useState} from 'react';
import {getRank} from '@/app/apis/rankApi';
import {universityType} from '@/type';

export default function Page5() {
  const [data, setData] = useState<universityType[] | []>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getRank('weekly');
    setData(data);
  };

  return (
    <div className="flex flex-col relative aspect-[16/10] w-screen items-center bg-black">
      <Image
        src="/images/main/bg_page5.png"
        width={1679}
        height={514}
        alt="bg"
        className="absolute z-0 top-[-24vw]"
      />

      <Slider data={data} />

      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="from-dark1 to-light1 bg-gradient-to-r bg-clip-text text-[0.9vw] text-transparent">
          Ranking
        </div>
        <div className="text-white text-[1.46vw] mt-[1.35vw]">학교 별 순위</div>
      </div>

      <div className="relative mt-[10.6vw] w-screen flex justify-center items-center] z-30">
        <div className="absolute left-[6.25vw] flex flex-col gap-[3.28vw]">
          <LeftBox1 />
          <LeftBox2 />
        </div>

        <RankBox universities={data} />
      </div>
    </div>
  );
}
