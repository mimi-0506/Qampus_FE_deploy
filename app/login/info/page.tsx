import Department from './_component/Deparment';
import Email from './_component/Email';
import School from './_component/School';

export default function page() {
  return (
    <div className="mt-[1.87vw]">
      <p className="text-[1.1vw] text-white text-center">
        더 원활한 서비스 이용을 위해 추가 정보를 입력해주세요
      </p>

      <form className="flex flex-col justify-center items-center mt-[3vw] gap-[2.5vw]">
        <School />
        <Department />
        <Email />
        <button className="mt-[2.5vw] aspect-[475/63] w-[24.7vw] flex justify-center items-center text-white bg-main rounded-lg">
          다음으로
        </button>
      </form>
    </div>
  );
}
