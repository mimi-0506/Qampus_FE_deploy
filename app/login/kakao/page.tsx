'use client';

import {fetchWithoutAuth} from '@/app/api/clientFetch';
import {useSearchParams} from 'next/navigation';
import {useEffect} from 'react';

export default function Kakao() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) test(code);
  }, [code]);

  const test = async (code: string) => {
    try {
      const response = await fetchWithoutAuth({
        method: 'GET',
        url: `/auth/login/kakao?code=${code.trim()}`,
      });

      console.log(response);

      // 회원 정보가 있으면 유저 메인으로 이동
      // router.push("/userMain");

      // 회원 정보가 없으면 회원가입 창으로 이동
      // router.push("/login/info");
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return <p>카카오 로그인 중...</p>;
}
