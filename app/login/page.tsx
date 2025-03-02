'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    document.cookie = 'info=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
  }, []);

  const loginWithKakao = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY}`;
    router.push(url);
  };

  return (
    <>
      <div className="mt-[5vw] gap-[0.7vw] flex flex-col text-[0.9vw]">
        <button
          onClick={loginWithKakao}
          className="relative w-[20.4vw] aspect-[392/63] rounded-lg bg-yellow flex justify-center items-center box-border"
        >
          <div className="absolute left-[1.1vw]">
            <div className="relative w-[1.25vw] aspect-[24/22] ">
              <Image
                src="/svg/kakao.svg"
                fill
                alt="kakao icon"
                className="absolute"
              />
            </div>
          </div>
          카카오로 시작하기
        </button>
        <button className="relative w-[20.4vw] aspect-[392/63] rounded-lg bg-black text-white  flex justify-center items-center box-border">
          <div className="absolute left-[1.1vw]">
            <div className="relative w-[1.25vw] aspect-[24/22]">
              <Image src="/svg/user.svg" fill alt="user icon" />
            </div>
          </div>
          회원가입
        </button>
      </div>
    </>
  );
}
