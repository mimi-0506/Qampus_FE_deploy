'use client';

import {Dispatch, SetStateAction, useRef, useState} from 'react';

async function postSendAuthNumber(school: string, email: string) {
  const res = await fetch(`https://univcert.com/api/v1/certify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: process.env.NEXT_PUBLIC_UNIVCERT,
      email: email,
      univName: school,
      univ_check: true,
    }),
  });
  const data = await res.json();

  return data;
}

async function postCheckAuthNumber(
  school: string,
  email: string,
  authNumber: number,
) {
  const res = await fetch(`https://univcert.com/api/v1/certifycode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Key: process.env.NEXT_PUBLIC_UNIVCERT,
      email: email,
      univName: school,
      code: authNumber,
    }),
  });
  const data = await res.json();

  return data.success;
}

export default function Email({
  school,
  setIsAuthValid,
}: {
  school: string;
  setIsAuthValid: Dispatch<SetStateAction<boolean>>;
}) {
  const [isEmailValid, setEmailValid] = useState<boolean>(false);
  const [isSendAuth, setIsSendAuth] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const authRef = useRef<HTMLInputElement>(null);

  const handleEmailChange = async e => {
    const nowEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(nowEmail)) setEmailValid(true);
    else setEmailValid(false);
  };

  const handleEmailAuth = async e => {
    e.preventDefault();
    if (emailRef.current) {
      const res = await postSendAuthNumber(school, emailRef.current.value);

      //이거 정크메일로 갈때가 있어서 그걸 확인해달라는 문구가 필요할듯
      if (res) setIsSendAuth(true);
      else alert(res.message);
    }
  };

  const handleAuthNumberCheck = async e => {
    e.preventDefault();
    if (emailRef.current && authRef.current) {
      const res = await postCheckAuthNumber(
        school,
        emailRef.current.value,
        parseInt(authRef.current.value),
      );
      console.log(res);

      if (res) {
        alert('인증되었습니다');
        setIsAuthValid(true);
      } else alert('인증코드가 잘못되었습니다.');
    }
  };

  return (
    <div className="flex flex-col text-[1.4vw] relative text-grey4">
      <label className="ml-[0.7vw]">학교 이메일</label>
      <input
        type="email"
        ref={emailRef}
        onChange={handleEmailChange}
        className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py=[0.2vw]"
        placeholder="학교 계정 이메일을 입력하세요"
      />

      {isEmailValid && (
        <button
          className="absolute right-0 top-[2.5vw]
    flex justify-center items-center w-[5.6vw] aspect-[108/31] rounded-[16vw]
    bg-grey4 text-black text-[0.7vw]
    "
          onClick={handleEmailAuth}
        >
          인증번호 전송
        </button>
      )}

      {isSendAuth && (
        <>
          <input
            ref={authRef}
            type="number"
            className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py=[0.2vw]"
            placeholder="인증번호를 입력하세요"
          />
          <button onClick={handleAuthNumberCheck}>인증번호 확인</button>
        </>
      )}
    </div>
  );
}
