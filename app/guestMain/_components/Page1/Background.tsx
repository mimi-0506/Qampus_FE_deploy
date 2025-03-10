import Image from 'next/image';

export default function Background() {
  return (
    <div className="absolute top-0 min-h-screen bg-white w-full">
      <div className="relative mt-[11.2vw] ml-[9.52vw] aspect-[2518/454] w-[131vw]">
        <Image src="/images/logo/logo_big.svg" alt="bg text" fill />
      </div>
      <div className="relative left-[-15vw] aspect-[2518/454] w-[131vw]">
        <Image src="/images/logo/logo_big.svg" alt="bg text" fill />
      </div>

      <Image
        src="/images/main/gradient_page1.png"
        alt=""
        width={1700}
        height={751}
        className="absolute top-[30.15vw]"
      />
    </div>
  );
}
