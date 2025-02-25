//학과 자동검색을 넣을까 했는데 2023이 최신임...
export default function Major() {
  return (
    <div className="flex flex-col text-[1.4vw] text-grey4">
      <label className="ml-[0.7vw]">학과</label>
      <input
        name="major"
        className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py=[0.2vw]"
        placeholder="학과를 입력해주세요"
      />
    </div>
  );
}
