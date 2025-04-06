'use client';
import {useEffect, useState} from 'react';
import {motion} from 'motion/react';
import {universityType} from '@/type';
import MainCircle from './MainCircle';
import SideCircle from './SideCircle';

type Position = -2 | -1 | 0 | 1 | 2;
const positionConfig = {
  [-2]: {size: 3.91, xOffset: -15, zIndex: 1},
  [-1]: {size: 6.61, xOffset: -9, zIndex: 2},
  [0]: {size: 10.94, xOffset: 0, zIndex: 3},
  [1]: {size: 6.61, xOffset: 9, zIndex: 2},
  [2]: {size: 3.91, xOffset: 15, zIndex: 1},
};
const BUTTONS = ['4th', '2nd', '1st', '3rd', '5th'];

export default function Slider({
  top,
  data,
}: {
  top?: string;
  data: universityType[] | [];
}) {
  const [circles, setCircles] = useState<universityType[]>(data);
  const [nowCenter, setNowCenter] = useState(circles[2]);

  useEffect(() => {
    if (data.length > 0) setButtonData(data);
  }, [data]);

  const setButtonData = async (data: universityType[]) => {
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

      <div className="flex gap-[1vw] relative z-10 w-screen h-[12vw] items-center justify-center ">
        {circles.map((univ, index) => {
          if (!univ?.university_id) return <div key={index} />;
          const position = (index - 2) as Position;
          const {size, xOffset, zIndex} = positionConfig[position];

          return (
            <motion.div
              key={`univ${univ.university_id}`}
              className={`absolute`}
              style={{
                zIndex: zIndex,
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
                <MainCircle id={univ.university_id} />
              ) : (
                <SideCircle id={univ.university_id} />
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
