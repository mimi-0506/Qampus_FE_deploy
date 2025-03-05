// import Image from 'next/image';
import BottomBar from '../_component/BottomBar';
import MainCircle from '@/components/ranking/MainCircle';
import {fetchWithoutAuth} from '@/app/server/actions/serverFetch';

// type univType = {
//   university_id: number;
//   university_name: string;
//   rate: number;
//   participant_count: number;
//   question_cnt: number;
//   answer_cnt: number;
//   choice_cnt: number;
// };

export const preload = (univName: string) => {
  void fetch(`https://api.example.com/university/detail?name=${univName}`, {
    cache: 'force-cache',
  }).catch(error => {
    console.error('Preload Error:', error); // ❌ 프리로드 실패 시 콘솔에만 표시
  });
};

export default async function Page({
  searchParams,
}: {
  searchParams: {[key: string]: string};
}) {
  const univName = searchParams.univ;
  preload(univName);

  let data = null;
  try {
    data = await fetchWithoutAuth({
      method: 'GET',
      url: `university/detail?name=${univName}`,
    });
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="w-screen flex flex-col justify-between bg-black">
      {/* justify-between용 */}
      <div />

      {/* 메인 내용 */}
      <div className="w-screen relative flex justify-center items-center pt-[9.16vw] pb-[1vw] px-[12vw]">
        <div className="relative">
          <MainCircle image={'univ_0'} />
        </div>

        <div className="flex flex-col">
          <h1 className="text-[1.875vw] text-white mb-[0.9vw]">
            {data?.university_name}
          </h1>
          <div className="flex text-grey3 text-[0.8vw] gap-[0.6vw] mb-[2.5vw]">
            <div className="flex justify-center items-center">주간 {}위</div>
            <div className="flex justify-center items-center">
              차지율 {data?.rate}%
            </div>
            <div className="flex justify-center items-center">
              참여 {data?.participant_count}명
            </div>
          </div>

          <div className="flex text-[1vw] gap-[1.25vw] text-center">
            <div className="flex flex-col justify-center items-center w-[9vw] aspect-[173/236] bg-slate-100">
              <div className="mb-[1.25vw] w-[2.76vw] aspect-[1/1]">이미지</div>
              <div className="text-main">질문 수</div>
              <div className="text-grey2">{data?.question_cnt}개</div>
            </div>
            <div className="flex flex-col justify-center items-center w-[9vw] aspect-[173/236] bg-slate-100">
              <div className="mb-[1.25vw] w-[2.76vw] aspect-[1/1]">이미지</div>
              <div className="text-main">답변 수</div>
              <div className="text-grey2">{data?.answer_cnt}개</div>
            </div>
            <div className="flex flex-col justify-center items-center w-[9vw] aspect-[173/236] bg-slate-100">
              <div className="mb-[1.25vw] w-[2.76vw] aspect-[1/1]">이미지</div>
              <div className="text-main">채택 수</div>
              <div className="text-grey2">{data?.choice_cnt}개</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-[4vw] w-[23.6vw] aspect-[453/472] bg-white">
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent" />

          <h2 className="text-[1.25vw]">최근 활동</h2>
          <ul className="text-[1vw] gap-[3vw]">
            <li>국어국문학과에서 답변을 등록했어요!</li>
            <li>국어국문학과에서 답변을 등록했어요!</li>
            <li>국어국문학과에서 답변을 등록했어요!</li>
            <li>국어국문학과에서 답변을 등록했어요!</li>
          </ul>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
