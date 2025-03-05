import Image from 'next/image';

export default function Background() {
  return (
    <div className="absolute top-0 min-h-screen bg-white h-screen w-full">
      <Image
        src="/images/logo/logo_big.png"
        alt="bg text"
        width={2105}
        height={380}
        sizes={'110vw'}
        className="mt-[5vw] ml-[9.52vw]"
      />

      <Image
        src="/images/logo/logo_bigpng"
        alt="bg text"
        width={2105}
        height={380}
        sizes={'110vw'}
        className=" relative top-[2.60vw] right-[15.63vw]"
      />

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
