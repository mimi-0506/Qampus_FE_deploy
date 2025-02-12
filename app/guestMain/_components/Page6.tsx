import Image from 'next/image';

export default function Page6() {
  const DATA = [
    {
      medal: 'gold',
      field: '환경',
      question:
        '지속 가능한 환경 기술들을 개발할 때 경제적 타당성과 환경적 이점을 동시에 충족시키는 방법은 뭔가요?',
      info: '조회수 982회 · 나도 궁금해요 215개',
    },
    {
      medal: 'silver',
      field: '경영',
      question:
        '여행사에서 판매하는 사회적 약자를 위한 관광상품(휠체어 이동 지원)도 esg 경영을 실천하는 방법일까요?',
      info: '조회수 815회 · 나도 궁금해요 174개',
    },
    {
      medal: 'bronze',
      field: '디자인',
      question:
        'ai를 활용해서 만든 디자인의 저작권은 제작자에게 있다고 봐야 하나요?',
      info: '조회수 798회 · 나도 궁금해요 155개',
    },
  ];

  const Card = ({
    medal,
    field,
    question,
    info,
  }: {
    medal: string;
    field: string;
    question: string;
    info: string;
  }) => {
    // medal 값에 따라 left 값을 동적으로 설정
    const leftValue = medal === 'silver' ? '80px' : '-80px';

    return (
      <div
        className="relative w-[1254px] h-[208px] box-border p-[15px] rounded-3xl bg-mainblack flex items-center gap-[44px]"
        style={{left: leftValue}} // 동적으로 left 값 적용
      >
        <div className="w-[97px] h-[107px] relative">
          <Image src={`/images/main/medal_${medal}.png`} fill alt="medal" />
        </div>
        <div className="flex flex-col gap-[18px]">
          <div className="w-[107px] h-[41px] text-[20px] bg-maindrakgray text-maingray flex justify-center items-center rounded-[51px]">
            {field}
          </div>
          <div className="text-white text-[26px]">{question}</div>
          <div className="text-mainpage2gary text-[20px]">{info}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-black to-maindarkblue relative w-screen h-screen flew flew-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-maindark to-mainlight">
          Popular Questions
        </div>
        <div className="text-[28px] text-white font-semibold">
          금주의 인기 질문
        </div>
      </div>

      <div className="flex flex-col items-center mt-[160px] gap-[36px]">
        {DATA.map((data, index) => {
          return (
            <Card
              key={index}
              medal={data.medal}
              field={data.field}
              question={data.question}
              info={data.info}
            />
          );
        })}
      </div>
    </div>
  );
}
