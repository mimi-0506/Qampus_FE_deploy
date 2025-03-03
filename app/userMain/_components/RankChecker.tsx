import Image from 'next/image';

export default function RankChecker({
  lastRank,
  thisRank,
}: {
  lastRank: number | undefined;
  thisRank: number | undefined;
}) {
  if (lastRank === undefined || thisRank === undefined) return <></>;

  if (lastRank === thisRank)
    return (
      <div className="w-[0.94vw] h-[0.94vw] relative">
        <Image src="/svg/_.svg" fill alt="dash" />
      </div>
    );
  else if (lastRank > thisRank)
    return (
      <div className="w-[0.94vw] h-[0.94vw] relative">
        <Image
          src="/svg/up_arrow.svg"
          fill
          alt="up arrow"
          className="rotate-180"
        />
      </div>
    );
  else if (lastRank < thisRank)
    return (
      <div className="w-[0.7vw] h-[0.7vw] relative">
        <Image src="/svg/up_arrow.svg" fill alt="up arrow" />
      </div>
    );
}
