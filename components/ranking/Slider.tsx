'use client';
import {useEffect, useState} from 'react';
import {motion} from 'motion/react';
import Image from 'next/image';
import {universityType} from '@/type';

export default function CircularCarousel({
  top,
  data,
}: {
  top?: string;
  data: universityType[] | [];
}) {
  const [circles, setCircles] = useState<universityType[] | []>([]);
  const [nowCenter, setNowCenter] = useState(circles[2]);
  const BUTTONS = ['4th', '2nd', '1st', '3rd', '5th'];

  useEffect(() => {
    if (data.length > 0) setData();
  }, [data]);

  const setData = async () => {
    setCircles([
      {...data[3], button: '4th'},
      {...data[1], button: '2nd'},
      {...data[0], button: '1st'},
      {...data[2], button: '3rd'},
      {...data[4], button: '5th'},
    ]);
    setNowCenter({...data[0], button: '1st'});
  };

  useEffect(() => {
    const nowIndex = circles.findIndex(
      x => x.university_id === nowCenter?.university_id,
    );
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
    <div className={`flex flex-col items-center absolute ${top} z-10`}>
      <div className="text-white text-[1.2vw] font-bold mb-[1vw]">
        주간 {nowCenter?.ranking}위
      </div>

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
              key={`univ${univ?.university_id}`}
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
                <div className="w-full aspect-[1/1] rounded-full overflow-hidden bg-gradient-to-b from-white to-blue-600 flex items-center justify-center border-[0.6vw] border-blue-800">
                  <div className="w-[83%] overflow-hidden aspect-[1/1] bg-page5roundbg border border-white rounded-full flex items-center justify-center">
                    <div className="w-[82%] overflow-hidden aspect-[1/1] rounded-full bg-white relative">
                      <Image
                        src={`/images/main/univ_${univ?.university_id}.png`}
                        alt="univ logo"
                        fill
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full overflow-hidden rounded-full bg-gradient-to-b from-white to-main flex items-center justify-center">
                  <div className="w-[80%] overflow-hidden aspect-[1/1] relative">
                    <Image
                      src={`/images/main/univ_${univ?.university_id}.png`}
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

      <div className="mt-[1.2vw] flex flex-col justify-center items-center">
        <div className="text-white text-[1.25vw] font-bold">
          {nowCenter?.university_name}
        </div>
        <div className="text-grey4 text-[0.83vw]">
          채택 {nowCenter?.choice_cnt}회
        </div>
      </div>
      <div className="flex gap-[1vw] mt-[4vw] text-[1vw] text-white relative z-30">
        {BUTTONS.map((button, key) => (
          <button
            key={`${key}_button`}
            onClick={() => {
              const selectedCircle = circles.find(
                circle => circle.button === button,
              );
              if (selectedCircle) setNowCenter(selectedCircle);
            }}
            className={`${nowCenter?.button === button ? 'text-white' : 'text-grey1'} rounded-lg`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}
