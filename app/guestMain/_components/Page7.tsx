import Image from 'next/image';

export default function Page7() {
  return (
    <div className="aspect-[16/9] w-screen overflow-hidden relative flex items-center justify-center">
      <Image
        src="/images/main/bg_page7.png"
        alt="bg"
        fill
        className="absolute top-0 z-0 "
      />
      <div className="text-[3.3vw] font-bold text-white relative z-10">
        Qampus에서 성장하기
      </div>
    </div>
  );
}
