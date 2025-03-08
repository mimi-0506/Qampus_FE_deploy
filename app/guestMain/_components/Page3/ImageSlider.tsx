import LeftArrow from '../../../../public/svg/left_arrow.svg';
import RightArrow from '../../../../public/svg/right_arrow.svg';
import {AnimatePresence, motion} from 'motion/react';
import Image from 'next/image';
const items = [
  '인기 질문과 답변을 둘러봐요',
  '학교 별 랭킹을 확인하고 순위 상승에 도전해요',
  '모르는 내용을 자유롭게 질문하고 답변해요',
];

export default function ImageSlider({
  direction,
  selectedItem,
  setSlide,
}: {
  direction: number;
  selectedItem: number;
  setSlide: (newDirection: 1 | -1) => void;
}) {
  return (
    <div className="w-full flex gap-[3.7vw] justify-center items-center relative top-[5vw]">
      <button
        onClick={() => setSlide(-1)}
        className="absolute top-[20vw] left-[12vw]"
      >
        <Image src={LeftArrow} alt="leftBtn" width={35} />
      </button>

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          key={selectedItem} // selectedItem의 key가 변경될 때마다 애니메이션 적용
          initial={{opacity: 0, x: direction * 50}}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              type: 'spring',
              visualDuration: 0.3,
              bounce: 0.4,
            },
          }}
          exit={{opacity: 0, x: direction * -50}}
          className="h-full flex flex-col justify-center items-center"
        >
          <p className="text-[1.67vw] mb-[1.8vw] font-semibold">
            {items[selectedItem]}
          </p>
          <div className="w-[61vw] aspect-[1168/757]">
            <Image
              priority={true}
              src={`/images/main/introduce${selectedItem + 1}.png`}
              width={1168}
              height={757}
              alt="introduce image"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={() => setSlide(1)}>
        <Image
          src={RightArrow}
          alt="rightBtn"
          width={35}
          className="absolute top-[20vw] right-[16vw]"
        />
      </button>
    </div>
  );
}
