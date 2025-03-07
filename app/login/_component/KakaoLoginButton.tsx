import Image from 'next/image';
import {useRouter} from 'next/navigation';

export default function KakaoLoginButton() {
  const router = useRouter();
  const loginWithKakao = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY}`;
    router.push(url);
  };

  return (
    <button
      onClick={loginWithKakao}
      className="relative w-[20.4vw] aspect-[392/63] rounded-[0.468vw] bg-yellow flex justify-center items-center box-border"
    >
      <div className="absolute left-[1.1vw]">
        <div className="relative w-[1.25vw] aspect-[24/22] ">
          <Image
            src="/svg/kakao.svg"
            fill
            alt="kakao icon"
            className="absolute"
          />
        </div>
      </div>
      카카오로 시작하기
    </button>
  );
}
