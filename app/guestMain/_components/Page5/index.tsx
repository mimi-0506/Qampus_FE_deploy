import Slider from './Slider';

export default function Page5() {
  return (
    <div className="flew flew-col relative h-screen w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="from-maindark to-mainlight bg-gradient-to-r bg-clip-text text-[18px] text-transparent">
          Ranking
        </div>
        <div className="text-white">학교 별 순위</div>
      </div>

      <Slider />

      <div className="relative mt-[300px] w-screen">
        <div className="absolute left-[120px] flex flex-col gap-[63px]">
          <div className="box-border flex h-[220px] w-[420px] flex-col gap-3 rounded-3xl border border-white p-[34px]">
            <h2 className="text-[18px] text-white">팀 대전</h2>
            <p className="text-maingray text-[15px]">
              학교별 팀 퀴즈 대전!
              <br />
              지식 대결로 점수를 얻어 랭킹을 올려봐요!
            </p>
          </div>
          <div className="box-border flex h-[220px] w-[420px] flex-col gap-3 rounded-3xl border border-white p-[34px]">
            <h2 className="text-[18px] text-white">팀 대전</h2>
            <p className="text-maingray text-[15px]">
              챌린지 이벤트
              <br />
              특정 기간 동안 가장 많은 점수를 <br />
              얻은 사용자에게 보상을 제공해요!
            </p>
          </div>
        </div>

        <div className="aboslute border-white-[0.85px] bg-mainblack right-[170px] h-[444px] w-[330px] rounded-3xl border text-white">
          <h2>주간 순위</h2>
          <ul>
            <li>1 경희대학교</li>
            <li>1 경희대학교</li>
            <li>1 경희대학교</li>
            <li>1 경희대학교</li>
            <li>1 경희대학교</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
