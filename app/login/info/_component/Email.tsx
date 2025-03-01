'use client';

import {univcertApi} from '@/app/apis/univcert';
import {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';
import toast from 'react-hot-toast';

async function postSendAuthNumber(university: string, email: string) {
  const data = await univcertApi('certify', {
    email: email,
    univName: university,
    univ_check: true,
  });

  return data;
}

async function postCheckAuthNumber(
  university: string,
  email: string,
  authNumber: number,
) {
  const data = await univcertApi('certifycode', {
    email: email,
    univName: university,
    code: authNumber,
  });

  return data.success;
}

export default function Email({
  university,
  setIsAuthValid,
}: {
  university: string;
  setIsAuthValid: Dispatch<SetStateAction<boolean>>;
}) {
  const [isEmailValid, setEmailValid] = useState<boolean>(false);
  const [isSendAuth, setIsSendAuth] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const authRef = useRef<HTMLInputElement>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nowEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailValid(emailRegex.test(nowEmail));
  };

  const handleEmailAuth = async (e: FormEvent) => {
    e.preventDefault();
    if (emailRef.current) {
      const res = await postSendAuthNumber(university, emailRef.current.value);

      if (res.success) setIsSendAuth(true);
      else if (res.message === '이미 완료된 요청입니다.') {
        toast('이메일 인증이 완료되어 있어요!');
        setIsAuthValid(true);
      } else toast.error(res.message);
    }
  };

  const handleAuthNumberCheck = async (e: FormEvent) => {
    e.preventDefault();
    if (emailRef.current && authRef.current) {
      const res = await postCheckAuthNumber(
        university,
        emailRef.current.value,
        parseInt(authRef.current.value),
      );

      if (res) {
        toast.success('인증되었습니다');
        setIsAuthValid(true);
      } else toast.error('인증코드가 잘못되었습니다.');
    }
  };

  return (
    <div className="flex flex-col text-[1.4vw] relative text-grey4 gap-[0.5vw]">
      <label className="ml-[0.7vw]">학교 이메일</label>
      <div className="relative">
        <input
          type="email"
          name="email"
          ref={emailRef}
          onChange={handleEmailChange}
          className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py-[0.2vw]"
          placeholder="학교 계정 이메일을 입력하세요"
        />

        {isEmailValid && (
          <button
            className="absolute top-[0.5vw] right-[0.5vw] flex justify-center items-center w-[5.6vw] aspect-[108/31] rounded-[16vw] bg-grey4 text-black text-[0.7vw]"
            onClick={handleEmailAuth}
          >
            인증번호 전송
          </button>
        )}
      </div>

      {isSendAuth && (
        <div className="relative">
          <input
            ref={authRef}
            type="number"
            className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py-[0.2vw]"
            placeholder="인증번호를 입력하세요"
          />
          <button
            className="absolute top-[0.5vw] right-[0.5vw]  flex justify-center items-center w-[5.6vw] aspect-[108/31] rounded-[16vw] bg-grey4 text-black text-[0.7vw]"
            onClick={handleAuthNumberCheck}
          >
            인증번호 확인
          </button>
        </div>
      )}
    </div>
  );
}
