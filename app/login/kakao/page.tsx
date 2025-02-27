'use client';

//import {useInfoStore} from '@/providers/store-provider';
import {useSearchParams, useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Kakao() {
  const searchParams = useSearchParams();
  // const setInfo = useInfoStore(state => state.setInfo);
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) login(code);
  }, [code]);

  const login = async (code: string) => {
    const response2 = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/login/kakao?code=${code}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        cache: 'no-cache',
      },
    );
    console.log(response2);

    return;

    const response = await fetch(`/api/login?code=${code}`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();
    if (response.ok && data.success) {
      // 로그인 성공 → 유저 메인으로 이동
      //setInfo({..data});
      router.push('/userMain');
    } else {
      // 회원가입 페이지로 이동
      router.push('/login/info');
    }
  };

  return <p>카카오 로그인 중...</p>;
}
