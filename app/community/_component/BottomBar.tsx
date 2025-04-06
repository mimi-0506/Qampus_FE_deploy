import {memo} from 'react';
import Image from 'next/image';

const BottomBar = memo(function BottomBar() {
  return (
    <div className="relative overflow-hidden w-[111vw]  h-[10vw] left-[-5vw] top-[-9vw] flex justify-center">
      <div className="absolute left-0 top-0 w-[111vw] aspect-[2132/585] z-0">
        <Image fill src="/images/community/bottom.webp" alt="" />
      </div>
    </div>
  );
});

export default BottomBar;
