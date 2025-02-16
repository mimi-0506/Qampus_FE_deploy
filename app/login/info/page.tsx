'use client';

export default function page() {
  return (
    <div className="mt-[1.87vw]">
      <p className="text-[1.1vw] text-white text-center">
        더 원활한 서비스 이용을 위해 추가 정보를 입력해주세요
      </p>

      {false ? (
        <form className="flex flex-col justify-center items-center mt-[3vw] gap-[2.5vw]">
          <div className="flex flex-col text-[1.14vw] text-grey4 gap-[0.6vw]">
            <label className="ml-[0.7vw]">재학 여부</label>
            <div className="flex justify-between items-center gap-[1.4vw]">
              <button>예</button> <button>아니오</button>
            </div>
          </div>

          <div className="flex flex-col text-[1.14vw] text-grey4 gap-[0.6vw]">
            <label className="ml-[0.7vw]">학교 이메일</label>
            <input
              className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py=[0.2vw]"
              placeholder="학교 계정 이메일을 입력해주세요"
            />
            <button>인증번호 전송</button>
          </div>

          <button className="mt-[2.5vw] aspect-[475/63] w-[24.7vw] flex justify-center items-center text-white bg-main rounded-lg">
            작성 완료
          </button>
        </form>
      ) : (
        <form className="flex flex-col justify-center items-center mt-[3vw] gap-[2.5vw]">
          <div className="flex flex-col text-[1.14vw] text-grey4 gap-[0.6vw]">
            <label className="ml-[0.7vw]">학교</label>
            <input
              className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py=[0.2vw]"
              placeholder="학교 이름을 입력해주세요  ex)서울대학교"
            />
          </div>
          <div className="flex flex-col text-[1.4vw] text-grey4">
            <label className="ml-[0.7vw]">학과</label>
            <input
              className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py=[0.2vw]"
              placeholder="학과를 입력해주세요"
            />
          </div>

          <button className="mt-[2.5vw] aspect-[475/63] w-[24.7vw] flex justify-center items-center text-white bg-main rounded-lg">
            다음으로
          </button>
        </form>
      )}
    </div>
  );
}
