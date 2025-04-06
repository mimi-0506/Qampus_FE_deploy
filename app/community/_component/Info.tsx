'use client';

// import {getRank} from '@/app/apis/rankApi';
import useScrollAnimation from '@/app/guestMain/_components/useScrollAnimation';
import LeftBox1 from '@/components/ranking/LeftBox1';
import LeftBox2 from '@/components/ranking/LeftBox2';
import RankBox from '@/components/ranking/RankBox';
import Slider from '@/components/ranking/Slider';
import {rankType, universityType} from '@/type';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

export default function Info() {
  const [rankStandard, setRankStandard] = useState<rankType>('weekly');
  const [data, setData] = useState<universityType[]>([]);
  const {ref, isVisible} = useScrollAnimation();
  const router = useRouter();

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      const keyword = e.currentTarget.value.trim();
      router.push(
        `/community/${encodeURIComponent(keyword.replace('학교', ''))}`,
      );
    }
  };

  return (
    <div className="w-screen relative bg-black overflow-hidden">
      <div className="relative w-screen aspect-[1954/1524]">
        <Image
          src="/images/main/bg_page5.png"
          fill
          alt="bg"
          className="absolute z-0 top-[-17vw]"
        />
      </div>

      <div className="absolute w-screen h-screen top-[10vw]">
        <div className="w-screen flex flex-col items-center justify-center absolute z-10">
          <h1 className="text-white text-[1.875vw]">
            대전과 챌린지로 학교 순위 올리기
          </h1>
          <p className="text-grey2 text-[1vw] mt-[0.6vw]">
            현재 상위 학교들의 랭킹과 순위 지표를 확인하고 대전을 통해 순위를
            올려보세요!
          </p>

          <div className="mt-[2.8vw] w-[43vw] aspect-[837/67] relative text-[1vw] text-white border border-communityGrey rounded-[3vw] flex justify-center items-center">
            <input
              className="w-full bg-inherit border-none text-center placeholder:text-white outline-none"
              placeholder="학교 이름을 검색해보세요"
              onKeyDown={handleKeyDown}
            />
            <div className="absolute w-[1.2vw] aspect-[1/1] right-[1vw]">
              <Image fill src="/svg/search.svg" alt={'search'} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center] absolute top-[40vw] z-30">
        <div className="absolute left-[6.25vw] flex flex-col gap-[3.28vw]">
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

      <div className="absolute top-[25vw] left-[6.5vw] z-10">
        <div className="relative w-[87.5vw] aspect-[1680/830]">
          <Image src="/images/main/overlay_page5.png" alt="bg" fill />
        </div>
      </div>

      <div className="relative overflow-hidden w-[111vw]  h-[10vw] left-[-5vw] top-[-9vw] flex justify-center">
        <div className="absolute left-0 top-0 w-[111vw] aspect-[2132/585] z-0">
          <Image fill src="/images/community/bottom.png" alt="" />
        </div>
      </div>

      <div ref={ref} className="w-full bg-white absolute bottom-[20vw]" />
    </div>
  );
}
