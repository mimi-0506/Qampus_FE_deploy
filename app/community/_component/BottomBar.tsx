import Image from 'next/image';

export default function BottomBar() {
  return (
    <div className="relative overflow-hidden w-[111vw]  h-[10vw] left-[-5vw] top-[-9vw] flex justify-center">
      <div className="absolute left-0 top-0 w-[111vw] aspect-[2132/585] z-10">
        <Image fill src="/images/community/bottom.png" alt="" />
      </div>
    </div>
  );
}
