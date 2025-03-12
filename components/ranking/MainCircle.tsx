import Image from 'next/image';

export default function MainCircle({image}: {image: number | undefined}) {
  return (
    <div className="w-[13vw] aspect-[1/1] rounded-full bg-gradient-to-b from-white to-blue-600 flex items-center justify-center shadow-2xl border-[0.6vw] border-blue-800">
      <div className="w-[83%] aspect-[1/1] bg-page5roundbg border border-white rounded-full flex items-center justify-center">
        <div className="w-[82%] aspect-[1/1] overflow-hidden relative rounded-full bg-white flex items-center justify-center">
          <Image src={`/images/univ/${image}.png`} alt="univ logo" fill />
        </div>
      </div>
    </div>
  );
}
