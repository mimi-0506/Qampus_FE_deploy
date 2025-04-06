'use client';

// import {getRank} from '@/app/apis/rankApi';
import useScrollAnimation from '@/app/guestMain/_components/useScrollAnimation';
import LeftBox1 from '@/components/ranking/LeftBox1';
import LeftBox2 from '@/components/ranking/LeftBox2';
import RankBox from '@/components/ranking/RankBox';
import Slider from '@/components/ranking/Slider';
import {rankType, universityType} from '@/type';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {Bg1, Bg2} from './Bg';
import SearchArea from './SearchArea';
import BottomBar from './BottomBar';

export default function Info() {
  const [rankStandard, setRankStandard] = useState<rankType>('weekly');
  const [data, setData] = useState<universityType[]>([]);
  const {ref, isVisible} = useScrollAnimation();

  useEffect(() => {
    getData();
  }, [rankStandard]);

  const getData = async () => {
    // const data = await getRank(rankStandard);
    // setData(data);
    //현재 서버 닫혔으므로 더미데이터로 교체

    setData([
      {
        choice_cnt: 9,
        participant_count: 6,
        ranking: 1,
        rate: 10,
        university_id: 56,
        university_name: '서울대학교',
      },
      {
        choice_cnt: 16,
        participant_count: 17,
        ranking: 2,
        rate: 10,
        university_id: 57,
        university_name: '연세대학교',
      },
      {
        choice_cnt: 15,
        participant_count: 20,
        ranking: 3,
        rate: 10,
        university_id: 59,
        university_name: '국민대학교',
      },
      {
        choice_cnt: 17,
        participant_count: 6,
        ranking: 4,
        rate: 10,
        university_id: 52,
        university_name: '부산대학교',
      },
      {
        choice_cnt: 10,
        participant_count: 6,
        ranking: 5,
        rate: 10,
        university_id: 702,
        university_name: '성균관대학교',
      },
    ]);
  };

  return (
    <div className="w-screen relative bg-black overflow-hidden">
      <Bg1 />
      <SearchArea />
      <div className="w-full flex justify-between items-center absolute top-[40vw] z-30">
        <div className="ml-[6.25vw] flex flex-col gap-[3.28vw]">
          <LeftBox1 isVisible={isVisible} />
          <LeftBox2 isVisible={isVisible} />
        </div>

        <RankBox
          isVisible={isVisible}
          mode={true}
          universities={data}
          rankStandard={rankStandard}
          setRankStandard={setRankStandard}
        />
      </div>

      <Slider top={'top-[46vw]'} data={data} />

      <Bg2 />
      <BottomBar />

      <div ref={ref} className="w-full bg-white absolute bottom-[20vw]" />
    </div>
  );
}
