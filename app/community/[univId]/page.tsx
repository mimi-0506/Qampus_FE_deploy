// import Image from 'next/image';
import BottomBar from '../_component/BottomBar';

export default function Page() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="w-screen relative">
        <div className="relative">{/* <Image href="" alt="" fill/> */}</div>

        <div className="flex flex-col">
          <h1>경희대학교</h1>
          <div className="flex">
            <div>주간 1위</div>
            <div>차지율 32%</div>
            <div>참여 49,201명</div>
          </div>

          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <div>이미지</div>
              <div>질문 수</div>
              <div>1111개</div>
            </div>
          </div>

          <div className="flex flex-col relative">
            <div className="absolute top-0">그라데이션</div>
            <h2>최근 활동</h2>
            <ul>
              <li>국어국문학과에서 답변을 등록했어요!</li>
              <li>국어국문학과에서 답변을 등록했어요!</li>
              <li>국어국문학과에서 답변을 등록했어요!</li>
              <li>국어국문학과에서 답변을 등록했어요!</li>
            </ul>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
