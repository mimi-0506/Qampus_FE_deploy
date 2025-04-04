import Image from 'next/image';

export default function Background() {
  return (
    <div className="absolute min-h-screen bg-white w-full">
      <div className="mt-[11.2vw] ml-[9.52vw] w-[131vw]">
        <Image
          src="/images/logo/logo_big.svg"
          alt="bg text"
          width={2518}
          height={454}
          priority
          fetchPriority="high"
          className="w-full h-auto"
        />
      </div>

      <div className="ml-[-15vw] w-[131vw]">
        <Image
          src="/images/logo/logo_big.svg"
          alt="bg text"
          width={2518}
          height={454}
          priority
          fetchPriority="high"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-[30.15vw] w-screen">
        <Image
          src="/images/main/gradient_page1.webp"
          alt="bg gradation"
          width={1700}
          height={751}
          priority
          fetchPriority="high"
          quality={1}
          className="gpu-hint"
        />
      </div>
    </div>
  );
}
