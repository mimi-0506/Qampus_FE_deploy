import Image from 'next/image';
import AnimationText from './AnimationText';

export default function Page7() {
  return (
    <div className="aspect-[16/9] w-screen overflow-hidden relative flex items-center justify-center">
      <Image
        src="/images/main/bg_page7.png"
        alt="bg"
        fill
        className="absolute top-0 z-0 "
      />

      <AnimationText />
    </div>
  );
}
