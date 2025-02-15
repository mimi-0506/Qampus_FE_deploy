'use client';

import Image from 'next/image';
import Slider from './Sliders';

export default function Page3() {
  return (
    <div className="relative flex aspect-[16/11] w-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/main/gradient_page3.png"
        width={1810}
        height={880}
        className="absolute z-0 top-0"
        alt=""
      />

      <div className="absolute w-full h-full z-10 top-0">
        <Slider />
      </div>
    </div>
  );
}
