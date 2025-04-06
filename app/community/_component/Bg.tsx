import Image from 'next/image';
import {memo} from 'react';

function BgComponent1() {
  return (
    <div className="relative w-screen aspect-[1954/1524]">
      <Image
        src="/images/main/bg_page5.webp"
        fill
        sizes="100vw"
        alt="bg"
        priority
        fetchPriority="high"
        className="absolute z-0 top-[-17vw]"
      />
    </div>
  );
}

function BgComponent2() {
  return (
    <div className="absolute top-[25vw] left-[6.5vw] z-10">
      <div className="relative w-[87.5vw] aspect-[1680/830]">
        <Image
          src="/images/main/overlay_page5.webp"
          priority
          fetchPriority="high"
          alt="bg"
          fill
        />
      </div>
    </div>
  );
}

const Bg1 = memo(BgComponent1);
const Bg2 = memo(BgComponent2);
export {Bg1, Bg2};
