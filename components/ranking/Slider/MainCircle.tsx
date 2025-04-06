import Image from 'next/image';

export default function MainCircle({id}: {id: number}) {
  return (
    <div className="w-full aspect-[1/1] rounded-full overflow-hidden bg-gradient-to-b from-white to-blue-600 flex items-center justify-center border-[0.6vw] border-blue-800">
      <div className="w-[83%] h-auto overflow-hidden aspect-[1/1] bg-page5roundbg border border-white rounded-full flex items-center justify-center">
        <div className="w-[82%] h-auto aspect-[1/1] relative bg-white rounded-full overflow-hidden">
          <Image
            src={`/images/univ/${id}.png`}
            alt="univ logo"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
