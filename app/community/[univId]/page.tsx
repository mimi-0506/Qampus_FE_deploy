import Image from 'next/image';
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

const preload = async (univName: string) => {
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
            <MainCircle image={'univ_0'} />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[1.875vw] text-white mb-[0.9vw]">
            {data?.university_name}
          </h1>
          <div className="flex text-grey3 text-[0.8vw] gap-[0.6vw] mb-[2.5vw]">
            <div className="w-[5.36vw] aspect-[103/33] flex justify-center items-center bg-[url('/images/community/tag1.png')] bg-cover bg-center">
              주간 {data?.ranking}위
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
            <li>국어국문학과에서 답변을 등록했어요!</li>
            <li>영문학과에서 답변을 등록했어요!</li>
            <li>철학과에서 답변을 등록했어요!</li>
            <li>수학과에서 답변을 등록했어요!</li>
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
