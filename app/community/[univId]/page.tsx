'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import MainCircle from '@/components/ranking/MainCircle';
import {useParams} from 'next/navigation';
import {getUnivActivity, getUnivDetail} from '@/app/apis/rankApi';

type univDetailType = {
  university_id: number;
  university_name: string;
  rate: number;
  participant_count: number;
  question_cnt: number;
  answer_cnt: number;
  choice_cnt: number;
  rank: number;
};

type univActivityType = {
  major: string;
  activityType: string;
  id: number;
  activityId: number;
};

export default function Page() {
  const [data, setData] = useState<univDetailType | null>(null);
  const [activityData, setActivityData] = useState<univActivityType[] | []>([]);
  const {univId} = useParams<{univId: string}>();

  useEffect(() => {
    if (!univId) return;
    const univName = decodeURIComponent(univId).replace('대학교', '대');
    console.log(univName);

    const getDatas = async () => {
      const [univData, activityData] = await Promise.all([
        getUnivDetail(univName),
        getUnivActivity(univName),
      ]);

      setData(univData);

      if (activityData.code !== 'NOT_EXIST_UNIVERSITY')
        setActivityData(activityData);
    };

    getDatas();
  }, [univId]);

  return (
    <div className="w-screen flex flex-col justify-between relative bg-black mb-[3.3vw]">
      {/* background */}
      <div className="w-screen absolute top-[-6.6vw] left-0 bg-black">
        <div className="w-screen relative aspect-[3840/1928]">
          <Image src="/images/community/background.png" alt="bg" fill />
        </div>
      </div>

      {/* justify-between용 */}
      <div />

      {/* 메인 내용 */}
      <div className="w-screen relative flex justify-center items-center pt-[9.16vw] pb-[1vw] px-[12vw]">
        <div className="relative mr-[5.6vw] w-[10vw] h-[30vw] top-[-9vw] flex justify-center items-end">
          <div className="absolute top-0 z-20">
            <div className="relative w-[5.2vw] aspect-[100/501]">
              <Image src="/images/community/light.png" fill alt="light" />
            </div>
          </div>

          <div className="relative z-10 top-[-2vw]">
            <MainCircle image={data?.university_id} />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[1.875vw] text-white mb-[0.9vw]">
            {data?.university_name + '학교' || '대학 정보가 없습니다'}
          </h1>
          <div className="flex text-grey3 text-[0.8vw] gap-[0.6vw] mb-[2.5vw]">
            <div className="w-[5.36vw] aspect-[103/33] flex justify-center items-center bg-[url('/images/community/tag1.png')] bg-cover bg-center">
              주간 {data?.rank}위
            </div>
            <div className="w-[6.66vw] aspect-[128/33] flex justify-center items-center bg-[url('/images/community/tag2.png')] bg-cover bg-center">
              차지율 {data?.rate}%
            </div>
            <div className="w-[7.5vw] aspect-[144/33] flex justify-center items-center bg-[url('/images/community/tag3.png')] bg-cover bg-center">
              참여 {data?.participant_count}명
            </div>
          </div>

          <div className="flex text-[1vw] gap-[1.25vw] text-center">
            <div className="flex flex-col justify-center items-center w-[9vw] aspect-[173/236] bg-[url('/images/community/box1.png')] bg-cover bg-center">
              <div className="text-main mt-[4vw]">질문 수</div>
              <div className="text-grey2">{data?.question_cnt}개</div>
            </div>
            <div className="flex flex-col justify-center items-center w-[9vw] aspect-[173/236] bg-[url('/images/community/box2.png')] bg-cover bg-center">
              <div className="text-main mt-[4vw]">답변 수</div>
              <div className="text-grey2">{data?.answer_cnt}개</div>
            </div>
            <div className="flex flex-col justify-center items-center w-[9vw] aspect-[173/236] bg-[url('/images/community/box3.png')] bg-cover bg-center">
              <div className="text-main mt-[4vw]">채택 수</div>
              <div className="text-grey2">{data?.choice_cnt}개</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-[4vw] relative w-[23.6vw] overflow-hidden p-[3vw] box-border aspect-[453/472] text-white bg-[url('/images/community/bigBox.png')] bg-cover bg-center">
          <h2 className="text-[1.25vw] relative left-[-1.2vw] top-[-0.5vw]">
            최근 활동
          </h2>
          <ul className="flex flex-col text-[1vw] gap-[2.6vw] mt-[2vw] relative left-[1vw] top-[-0.9vw]">
            {activityData.length > 0 ? (
              activityData.map((act, index) => {
                let activityMessage = `${act?.major}에서 `;
                if (act?.activityType === 'ANSWER')
                  activityMessage += '답변을 등록했어요!';
                else if (act?.activityType === 'QUESTION')
                  activityMessage += '질문을 등록했어요!';
                else if (act?.activityType === 'CHOICE_SAVE')
                  activityMessage += '답변을 채택했어요!';

                return <li key={index}>{activityMessage}</li>;
              })
            ) : (
              <li>아직 활동이 없어요!</li>
            )}
          </ul>
          <div className="absolute bottom-0 left-0 w-full aspect-[453/349]">
            <div className="relative w-full h-full">
              <Image
                src="/images/community/gradation.png"
                alt="gradation"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
