'use client';
import {useEffect} from 'react';
import {useSearchParams} from 'next/navigation';
import {getKakaoUserFromCode} from '@/app/actions';

export default function Kakao() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) kakaoAccess(code);
  }, [code]);

  const kakaoAccess = async (code: string) => {
    const response = await getKakaoUserFromCode(code);
    console.log(response);
  };

  return <p>카카오 로그인 중...</p>;
}
