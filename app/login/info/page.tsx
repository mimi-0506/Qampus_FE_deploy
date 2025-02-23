'use client';

import {useState} from 'react';
import Department from './_component/Deparment';
import Email from './_component/Email';
import School from './_component/School';
import {useRouter} from 'next/navigation';

async function postSetInfo() {
  const res = await fetch(`test.com`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //토큰과 form에서 뽑아낸 로그인 정보 전송
    }),
  });
  const data = await res.json();

  return data;
}

export default function Page() {
  const [school, setSchool] = useState<string>('');
  const [isAuthValid, setIsAuthValid] = useState<boolean>(false);
  const router = useRouter();

  const handleNextStep = async e => {
    e.preventDefault();

    const res = await postSetInfo();
    if (res) router.push('/login/complete');
    else alert('회원가입 중 문제가 발생했습니다');
  };

  return (
    <div className="mt-[1.87vw]">
      <p className="text-[1.1vw] text-white text-center">
        더 원활한 서비스 이용을 위해 추가 정보를 입력해주세요
      </p>

      <form className="flex flex-col justify-center items-center mt-[3vw] gap-[2.5vw]">
        <School setSchool={setSchool} school={school} />
        <Department />
        <Email school={school} setIsAuthValid={setIsAuthValid} />
        <button
          disabled={!isAuthValid}
          className={`mt-[2.5vw] aspect-[475/63] w-[24.7vw] flex justify-center items-center text-white 
          ${isAuthValid ? 'bg-main' : 'bg-grey2'} rounded-lg`}
          onClick={handleNextStep}
        >
          다음으로
        </button>
      </form>
    </div>
  );
}
