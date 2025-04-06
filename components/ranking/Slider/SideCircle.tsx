import Image from 'next/image';

export default function SideCircle({id}: {id: number}) {
  return (
    <div className="w-full h-full overflow-hidden rounded-full bg-gradient-to-b from-white to-main flex items-center justify-center">
      <div className="w-[80%] h-auto overflow-hidden aspect-[1/1] relative">
        <Image
          src={`/images/univ/${id}.png`}
          alt="univ logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
