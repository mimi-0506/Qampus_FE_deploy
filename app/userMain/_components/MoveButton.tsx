'use client';

import {useRouter} from 'next/navigation';

export default function MoveButton({
  universityName,
}: {
  universityName: string | undefined;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/community/${universityName?.replace('학교', '')}`);
      }}
      className="mt-[2.5vw] bg-dark2 text-white text-[1.25vw] flex justify-center items-center rounded-[0.9vw] aspect-[469/60] w-[24.4vw]"
    >
      나의 소속 랭킹 보기
    </button>
  );
}
