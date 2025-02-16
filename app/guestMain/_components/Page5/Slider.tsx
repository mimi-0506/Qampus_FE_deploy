'use client';
import {useEffect, useState} from 'react';
import {motion} from 'motion/react';
import Image from 'next/image';

const items = [
  {image: '4', button: '4th'},
  {image: '2', button: '2nd'},
  {image: '1', button: '1st'},
  {image: '3', button: '3rd'},
  {image: '5', button: '5th'},
];

export default function CircularCarousel() {
  const [circles, setCircles] = useState(items);
  const [nowCenter, setNowCenter] = useState(circles[2]);

  useEffect(() => {
    const nowIndex = circles.findIndex(x => x.image === nowCenter.image);
    const shiftAmount = nowIndex - 2; // 중앙 인덱스를 기준으로 이동량 계산

    setCircles(prev => {
      const shiftedCircles = [...prev];
      for (let i = 0; i < Math.abs(shiftAmount); i++) {
        if (shiftAmount > 0)
          shiftedCircles.push(shiftedCircles.shift()!); // 오른쪽으로 회전
        else shiftedCircles.unshift(shiftedCircles.pop()!); // 왼쪽으로 회전
      }
      return shiftedCircles;
    });
  }, [nowCenter]);

  return (
    <div className="flex flex-col items-center gap-6 absolute top-[25vw] z-10">
      <div className="relative flex gap-[1vw] w-screen h-[200px] items-center justify-center overflow-hidden">
        {circles.map((univ, index) => {
          const position = index - 2; // 중앙을 기준으로 -2, -1, 0, 1, 2 위치 배치

          // 각 원의 크기 설정
          const size =
            position === 0 ? 103 : position === 1 || position === -1 ? 68 : 31;
          const scale = size / 103; // 크기에 맞는 scale 값

          return (
            <motion.div
              key={univ.image}
              className="absolute"
              style={{
                zIndex: index === 2 ? 10 : 5 - Math.abs(position),
              }}
              animate={{
                x: position * 90,
                scale: scale,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              <div className="relative mb-[1.2vw] w-[5.36vw] h-[5.36vw] rounded-full overflow-hidden">
                <Image
                  src={`/images/main/univ_${univ.image}.png`}
                  alt="univ logo"
                  fill
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-white ">{nowCenter.image}대학교</div>

      <div className="flex gap-[1vw] text-[1vw] text-white">
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
