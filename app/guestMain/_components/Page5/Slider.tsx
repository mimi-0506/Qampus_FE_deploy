'use client';
import {useEffect, useState} from 'react';
import {motion} from 'motion/react';
import Image from 'next/image';

const items = [
  {image: '4', button: '4th', num: 792},
  {image: '2', button: '2nd', num: 791},
  {image: '1', button: '1st', num: 790},
  {image: '3', button: '3rd', num: 794},
  {image: '5', button: '5th', num: 793},
];

export default function CircularCarousel() {
  const [circles, setCircles] = useState(items);
  const [nowCenter, setNowCenter] = useState(circles[2]);

  useEffect(() => {
    const nowIndex = circles.findIndex(x => x.image === nowCenter.image);
    const shiftAmount = nowIndex - 2;

    setCircles(prev => {
      const shiftedCircles = [...prev];
      for (let i = 0; i < Math.abs(shiftAmount); i++) {
        if (shiftAmount > 0) shiftedCircles.push(shiftedCircles.shift()!);
        else shiftedCircles.unshift(shiftedCircles.pop()!);
      }
      return shiftedCircles;
    });
  }, [nowCenter]);

  return (
    <div className="flex flex-col items-center absolute top-[22vw] z-10 ">
      <div className="text-white text-[1.2vw] font-bold mb-[1vw]">주간 1위</div>
      <div className="flex gap-[1vw] relative z-10 w-screen h-[12vw] items-center justify-center overflow-hidden ">
        {circles.map((univ, index) => {
          const position = index - 2;
          const size =
            position === 0
              ? 10.94
              : position === 1 || position === -1
                ? 6.61
                : 3.91;

          const xOffset =
            position === -2
              ? -15
              : position === -1
                ? -9
                : position === 0
                  ? 0
                  : position === 1
                    ? 9
                    : 15;

          return (
            <motion.div
              key={univ.image}
              className={`absolute`}
              style={{
                zIndex:
                  Math.abs(position) === 2
                    ? 1
                    : Math.abs(position) === 1
                      ? 2
                      : 3,
              }}
              animate={{
                x: `${xOffset}vw`,
                width: `${size}vw`,
                height: `${size}vw`,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              {position === 0 ? (
                <div className="w-full aspect-[1/1] rounded-full bg-gradient-to-b from-white to-blue-600 flex items-center justify-center shadow-2xl border-[0.6vw] border-blue-800">
                  <div className="w-[83%] aspect-[1/1] bg-page5roundbg border border-white rounded-full flex items-center justify-center">
                    <div className="w-[82%] aspect-[1/1] rounded-full bg-white relative">
                      <Image
                        src={`/images/main/univ_${univ.image}.png`}
                        alt="univ logo"
                        fill
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-b from-white to-main flex items-center justify-center shadow-lg">
                  <div className="w-[80%] aspect-[1/1] relative">
                    <Image
                      src={`/images/main/univ_${univ.image}.png`}
                      alt="univ logo"
                      fill
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <Image
        src="/images/main/overlay_page5.png"
        width={1370}
        height={952}
        alt="bg"
        className="absolute z-20 top-[-17vw] "
      />

      <div className="mt-[1.2vw] flex flex-col ">
        <div className="text-white text-[1.25vw] font-bold">
          {nowCenter.image}대학교
        </div>
        <div className="text-grey4 text-[0.83vw]">채택 {nowCenter.num}회</div>
      </div>
      <div className="flex gap-[1vw] mt-[3vw] text-[1vw] text-white relative z-30">
        {items.map(item => (
          <button
            key={item.image}
            onClick={() => setNowCenter(item)}
            className={`${nowCenter.image === item.image ? 'text-white' : 'text-grey1'} rounded-lg`}
          >
            {item.button}
          </button>
        ))}
      </div>
    </div>
  );
}
