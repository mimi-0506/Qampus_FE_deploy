'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const loginWithKakao = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY}`;
    router.push(url);
  };

  return (
    <>
      <div className="mt-[5vw] gap-[0.7vw] flex flex-col text-[0.9vw]">
        <button
          onClick={loginWithKakao}
          className="relative w-[20.4vw] aspect-[392/63] rounded-lg bg-yellow flex justify-center items-center box-border p-5"
        >
          <Image
            src="/svg/kakao.svg"
            width={24}
            height={22}
            alt="kakao icon"
            className="absolute left-[1.1vw]"
          />
          카카오로 시작하기
        </button>
        <button className="relative w-[20.4vw] aspect-[392/63] rounded-lg bg-black text-white  flex justify-center items-center box-border p-5">
          <Image
            src="/svg/user.svg"
            width={24}
            height={22}
            alt="user icon"
            className="absolute left-[1.1vw]"
          />
          회원가입
        </button>
      </div>
    </>
  );
}
