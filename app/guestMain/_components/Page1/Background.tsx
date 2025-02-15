import Image from 'next/image';

export default function Background() {
  return (
    <div className="absolute top-0 z-0 h-screen w-full">
      <div className="w-[110vw] aspect-[2105/400] mt-[11.15vw] ml-[9.52vw]">
        <Image
          src="/images/main/bg_logo.png"
          alt="bg text"
          width={2105}
          height={380}
          layout="responsive"
        />
      </div>

      <div className="w-[110vw] aspect-[2105/400] relative top-[2.60vw] right-[15.63vw]">
        <Image
          src="/images/main/bg_logo.png"
          alt="bg text"
          width={2105}
          height={380}
          layout="responsive"
        />
      </div>

      <Image
        src="/images/main/gradient_page1.png"
        alt=""
        width={1700}
        height={751}
        layout="responsive"
        className="absolute top-[30.15vw]"
      />
    </div>
  );
}
