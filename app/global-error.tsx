'use client';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

export default function GlobalError({error}: {error: Error}) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col gap-[1vw] items-center justify-center">
      <div className="w-[20vw] aspect-[110/111] relative">
        <Image src="/images/characters/error.png" fill alt="error character" />
      </div>
      <h1 className="text-2xl font-bold text-red-500">
        이런! 문제가 발생했어요
      </h1>
      <p className="mt-2 text-gray-500">{error?.message}</p>

      <button
        onClick={() => {
          router.push('/login');
        }}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        로그인 화면으로 돌아가기
      </button>
    </div>
  );
}
