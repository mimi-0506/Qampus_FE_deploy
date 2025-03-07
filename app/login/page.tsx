'use client';

import {useEffect} from 'react';
import KakaoLoginButton from './_component/KakaoLoginButton';
import SignUpButton from './_component/SignUpButton';

export default function LoginPage() {
  useEffect(() => {
    document.cookie = 'info=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
  }, []);

  return (
    <div className="mt-[5vw] gap-[0.7vw] flex flex-col text-[0.9vw]">
      <KakaoLoginButton />
      <SignUpButton />
    </div>
  );
}
