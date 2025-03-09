'use client';

import Image from 'next/image';
import UnivMap from './UnivMap';
import {universities} from '@/constants/dummy';
import {useEffect, useState} from 'react';
import {communityUnivType} from '@/type';
import {getRank} from '@/app/apis/rankApi';

export default function UnivMapArea() {
  const [data, setData] = useState<communityUnivType[] | []>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getRank('weekly', 20);
    console.log(data);
    setData(universities);
  };

  return (
    <div className="w-screen">
      <div className="relative w-full aspect-[1920/1020] overflow-hidden z-10">
        <UnivMap data={data} />
        <div className="absolute top-[5vw] left-[5vw] flex gap-[0.6vw]">
          <div className="relative w-[6vw] aspect-[1/1]">
            <Image
              src="/images/characters/wink.png"
              alt="character"
              fill
              className="object-contain w-[21vw] aspect-[402/406] transform scale-x-[-1]"
            />
          </div>
          <div className="w-[20.5vw] h-[2.7vw] bg-dark1 text-white rounded-[0.468vw] text-[0.9vw] flex justify-center items-center">
            랭킹으로 점수를 높여 학교 영역을 넓혀보세요
          </div>
        </div>
      </div>
    </div>
  );
}
