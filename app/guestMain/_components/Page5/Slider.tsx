'use client';

import {motion} from 'framer-motion';
import {useState} from 'react';

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      {/* 이미지 슬라이더 */}
      <div className="relative flex h-[200px] w-[400px] items-center justify-center overflow-hidden">
        {[].map((src, index) => {
          const offset = index - activeIndex;
          return (
            <motion.img
              key={index}
              src={src}
              alt={`Image ${index}`}
              className="absolute h-24 w-24 rounded-full shadow-lg"
              style={{
                left: `calc(50% + ${offset * 120}px)`,
              }}
              animate={{
                rotate: offset * 15,
                scale: index === activeIndex ? 1.3 : 1,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
              transition={{type: 'spring', stiffness: 100, damping: 15}}
            />
          );
        })}
      </div>

      {/* 버튼 */}
      <div className="mt-6 flex space-x-2">
        {[].map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-4 w-4 rounded-full ${
              activeIndex === index ? 'scale-125 bg-blue-600' : 'bg-gray-400'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
