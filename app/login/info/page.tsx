'use client';

import {FormEvent, useState} from 'react';
import Major from './_component/Major';
import Email from './_component/Email';
import University from './_component/University';
import {useRouter} from 'next/navigation';
import {postSetInfo} from '@/app/apis/signupApi';
import SubmitButton from './_component/SubmitButton';
import toast from 'react-hot-toast';

export default function Page() {
  const [university, setUniversity] = useState<string>('');
  const [isAuthValid, setIsAuthValid] = useState<boolean>(false);

  const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await postSetInfo(data);
    console.log(res);

    if (res.success) router.push('/login/complete');
    else toast.error(res.detail);
  };

  return (
    <div className="mt-[1.87vw]">
      <p className="text-[1.1vw] text-white text-center">
        더 원활한 서비스 이용을 위해 추가 정보를 입력해주세요
      </p>

      <form
        className="flex flex-col justify-center items-center mt-[3vw] gap-[2.5vw] "
        onSubmit={handleSignup}
      >
        <University setUniversity={setUniversity} university={university} />

        <Major />

        {university && (
          <Email university={university} setIsAuthValid={setIsAuthValid} />
        )}

        <SubmitButton isAuthValid={isAuthValid} />
      </form>
    </div>
  );
}
