import Image from 'next/image';
import Sliders from './Sliders';

export default function Page3() {
  return (
    <div className="relative flex aspect-[16/11] w-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute z-0">
        <div className="relative w-[100vw] aspect-[1810/880]">
          <Image
            src="/images/main/gradient_page3.webp"
            fill
            sizes="100vw"
            alt="bg gradient"
            quality={50}
          />
        </div>
      </div>
      <div className="absolute w-full h-full z-10 top-0">
        <Sliders />
      </div>
    </div>
  );
}
