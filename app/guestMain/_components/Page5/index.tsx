import Image from 'next/image';
import Slider from './Slider';

export default function Page5() {
  const universities = [
    '경희대학교',
    '서강대학교',
    '홍익대학교',
    '건국대학교',
    '상명대학교',
  ];

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
          Ranking
        </div>
        <div className="text-white text-[1.46vw] mt-[1.35vw]">학교 별 순위</div>
      </div>

      <div className="relative mt-[10.6vw] w-screen flex justify-center items-center] z-30">
        <div className="absolute left-[6.25vw] flex flex-col gap-[3.28vw]">
          <div className="box-border flex h-[11.5vw] w-[21.8vw] flex-col gap-3 p-[1.77vw] bg-[url('/images/main/box1_page5.png')] bg-contain bg-no-repeat">
            <h2 className="text-[0.9vw] text-white">팀 대전</h2>
            <p className="text-grey3 text-[0.78vw]">
              학교별 팀 퀴즈 대전!
              <br />
              지식 대결로 점수를 얻어 랭킹을 올려봐요!
            </p>
          </div>
          <div className="box-border flex h-[11.5vw] w-[21.8vw] flex-col gap-3 p-[1.77vw] bg-[url('/images/main/box2_page5.png')] bg-contain bg-no-repeat">
            <h2 className="text-[0.9vw] text-white">팀 대전</h2>
            <p className="text-grey3 text-[0.78vw]">
              챌린지 이벤트
              <br />
              특정 기간 동안 가장 많은 점수를 <br />
              얻은 사용자에게 보상을 제공해요!
            </p>
          </div>
        </div>

        <div
          className="absolute right-[8.85vw] pt-[1.875vw] px-[1.2vw] box-border h-[23.1vw] w-[17.2vw] text-white 
        bg-[url('/images/main/box3_page5.png')] 
        bg-contain bg-no-repeat"
        >
          <h2 className="w-full text-center text-[1vw] font-semibold">
            주간 순위
          </h2>
          <ul className="mt-[1vw] mb-[3.2vw] text-[0.83vw]">
            {universities.map((university, index) => (
              <li
                key={index}
                className={`flex items-center py-[1vw] border-b border-gray-700 last:border-b-0
             ${index === 2 || (index === 3 && 'text-grey4')}   
               ${index === 4 && 'text-grey3'}   
            `}
              >
                <span className="">{index + 1}</span>
                <span className="ml-[1.3vw]">{university}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
