'use client';

import UnivMap from './UnivMap';
import {useEffect, useState} from 'react';
import {communityUnivType} from '@/type';
import Character from './Character';
// import {getRank} from '@/app/apis/rankApi';

export default function UnivMapArea() {
  const [data, setData] = useState<communityUnivType[] | []>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const data = await getRank('weekly', 20);
    setData([
      {
        university_id: 52,
        university_name: '부산대',
        ranking: 13,
        participant_count: 487,
        rate: 5,
        choice_cnt: 210,
        location: [129.0792, 35.2324],
      },
      {
        university_id: 53,
        university_name: '충북대',
        ranking: 17,
        participant_count: 321,
        rate: 5,
        choice_cnt: 150,
        location: [127.4561, 36.6283],
      },
      {
        university_id: 56,
        university_name: '서울대',
        ranking: 1,
        participant_count: 1024,
        rate: 5,
        choice_cnt: 950,
        location: [126.9516, 37.4602],
      },
      {
        university_id: 57,
        university_name: '연세대',
        ranking: 2,
        participant_count: 980,
        rate: 5,
        choice_cnt: 920,
        location: [126.9386, 37.5658],
      },
      {
        university_id: 105,
        university_name: '홍익대',
        ranking: 12,
        participant_count: 512,
        rate: 5,
        choice_cnt: 320,
        location: [126.9253, 37.5519],
      },
      {
        university_id: 106,
        university_name: '충남대',
        ranking: 15,
        participant_count: 398,
        rate: 5,
        choice_cnt: 180,
        location: [127.3448, 36.3681],
      },
      {
        university_id: 107,
        university_name: '전남대',
        ranking: 18,
        participant_count: 289,
        rate: 5,
        choice_cnt: 120,
        location: [126.9025, 35.1769],
      },
      {
        university_id: 703,
        university_name: '고려대',
        ranking: 3,
        participant_count: 870,
        rate: 5,
        choice_cnt: 800,
        location: [127.0336, 37.5894],
      },
      {
        university_id: 704,
        university_name: '서강대',
        ranking: 5,
        participant_count: 690,
        rate: 5,
        choice_cnt: 610,
        location: [126.9405, 37.5511],
      },
      {
        university_id: 706,
        university_name: '동국대',
        ranking: 11,
        participant_count: 445,
        rate: 5,
        choice_cnt: 270,
        location: [126.9981, 37.5585],
      },
      {
        university_id: 602,
        university_name: '건국대',
        ranking: 10,
        participant_count: 470,
        rate: 5,
        choice_cnt: 290,
        location: [127.0795, 37.5417],
      },
      {
        university_id: 712,
        university_name: '국민대',
        ranking: 14,
        participant_count: 410,
        rate: 5,
        choice_cnt: 200,
        location: [126.9971, 37.6106],
      },
      {
        university_id: 702,
        university_name: '성균관대',
        ranking: 4,
        participant_count: 800,
        rate: 5,
        choice_cnt: 730,
        location: [126.9932, 37.5875],
      },
      {
        university_id: 713,
        university_name: '인하대',
        ranking: 9,
        participant_count: 520,
        rate: 5,
        choice_cnt: 340,
        location: [126.6526, 37.4495],
      },
      {
        university_id: 302,
        university_name: '한양대',
        ranking: 6,
        participant_count: 745,
        rate: 5,
        choice_cnt: 670,
        location: [127.045, 37.5577],
      },
      {
        university_id: 102,
        university_name: '경북대',
        ranking: 16,
        participant_count: 360,
        rate: 5,
        choice_cnt: 170,
        location: [128.6109, 35.8883],
      },
      {
        university_id: 652,
        university_name: '단국대',
        ranking: 19,
        participant_count: 280,
        rate: 5,
        choice_cnt: 140,
        location: [127.1268, 37.3211],
      },
      {
        university_id: 711,
        university_name: '숭실대',
        ranking: 20,
        participant_count: 240,
        rate: 5,
        choice_cnt: 120,
        location: [126.9572, 37.4968],
      },
      {
        university_id: 717,
        university_name: '명지대',
        ranking: 21,
        participant_count: 215,
        rate: 5,
        choice_cnt: 110,
        location: [127.0105, 37.5827],
      },
      {
        university_id: 719,
        university_name: '경기대',
        ranking: 22,
        participant_count: 200,
        rate: 5,
        choice_cnt: 100,
        location: [127.0375, 37.3003],
      },
    ]);
  };

  return (
    <div className="w-screen">
      <div className="relative w-full aspect-[1920/1020] overflow-hidden z-10">
        <UnivMap data={data} />
        <Character />
      </div>
    </div>
  );
}
