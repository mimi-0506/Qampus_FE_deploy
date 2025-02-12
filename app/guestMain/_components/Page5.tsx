export default function Page5() {
  return (
    <div className="bg-black relative w-screen h-screen flew flew-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-maindark to-mainlight">
          Ranking
        </div>
        <div className="text-white">학교 별 순위</div>
      </div>

      <div className="mt-[300px] w-screen relative">
        <div className="flex flex-col gap-[63px] absolute left-[120px]">
          <div className="flex flex-col gap-3 w-[420px] h-[220px] box-border p-[34px] rounded-3xl border border-white">
            <h2 className="text-white text-[18px]">팀 대전</h2>
            <p className="text-maingray text-[15px]">
              학교별 팀 퀴즈 대전!
              <br />
              지식 대결로 점수를 얻어 랭킹을 올려봐요!
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[420px] h-[220px] box-border p-[34px] rounded-3xl border border-white">
            <h2 className="text-white text-[18px]">팀 대전</h2>
            <p className="text-maingray text-[15px]">
              챌린지 이벤트
              <br />
              특정 기간 동안 가장 많은 점수를 <br />
              얻은 사용자에게 보상을 제공해요!
            </p>
          </div>
        </div>

        <div className="w-[330px] h-[444px] right-[170px] aboslute rounded-3xl border border-white-[0.85px] bg-mainblack text-white">
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
