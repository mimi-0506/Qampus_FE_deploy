'use client';

import {FormEvent, useState} from 'react';
import Major from './_component/Major';
import Email from './_component/Email';
import University from './_component/University';
//import {useRouter} from 'next/navigation';

//이건 입력이 필요하니까 사전 호출 못 함.
const postSetInfo = async (formData: {[k: string]: FormDataEntryValue}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/signup/complete`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        universityName: formData.universityName,
        major: formData.major,
      }),
    },
  );

  const data = await response.json();

  return data;
};

export default function Page() {
  const [university, setUniversity] = useState<string>('');
  const [isAuthValid, setIsAuthValid] = useState<boolean>(false);
  // const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const res = await postSetInfo(data);

    console.log(res);
    return;

    //  if (res) router.push('/login/complete');
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
        <button
          disabled={!isAuthValid}
          className={`mt-[2.5vw] aspect-[475/63] w-[24.7vw] flex justify-center items-center text-white 
          ${isAuthValid ? 'bg-main' : 'bg-grey2'} rounded-lg`}
        >
          다음으로
        </button>
      </form>
    </div>
  );
}
