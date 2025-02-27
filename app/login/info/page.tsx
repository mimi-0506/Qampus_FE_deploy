'use client';

import {FormEvent, useState} from 'react';
import Major from './_component/Major';
import Email from './_component/Email';
import University from './_component/University';
import {useRouter} from 'next/navigation';
import {fetchWithAuth} from '@/app/server/actions/serverFetch';

const postSetInfo = async (formData: {[k: string]: FormDataEntryValue}) => {
  return await fetchWithAuth({
    method: 'POST',
    url: `/auth/signup/complete?email=${formData.email}`,
    body: {
      universityName: formData.universityName,
      major: formData.major,
    },
  });
};

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
    else {
      //에러처리
      //회원가입 된 유저가 회원가입 다시 한번 하면
      //  status: 404,
      //  detail: '임시로 저장된 사용자 정보가 존재하지 않거나 만료되었습니다.',
    }
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
