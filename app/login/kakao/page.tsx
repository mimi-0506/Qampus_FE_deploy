'use client';

import {useInfoStore} from '@/providers/store-provider';
import {useSearchParams, useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Kakao() {
  const searchParams = useSearchParams();
  const setInfo = useInfoStore(state => state.setInfo);
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) login(code);
  }, [code]);

  const login = async (code: string) => {
    //api라우터
    const response = await fetch(`/api/login?code=${code}`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();
    console.log('카카오 로그인', data);
    setInfo(data);

    if (data.userId) router.push('/userMain');
    else router.push('/login/info');
  };

  return <p>카카오 로그인 중...</p>;
}
