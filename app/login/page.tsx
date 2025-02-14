import Image from 'next/image';
import StartPage from './_components/StartPage';
export const metadata = {
  title: '로그인 | MyApp',
  description: '로그인하지 않은 사용자를 위한 메인 페이지입니다.',
};

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center item-center w-[680px] h-[750px] rounded-3xl overflow-hidden relative">
        <Image
          src="/images/login/background.png"
          fill
          alt="bg"
          className="absolute"
        />
        <Image src="" width={176} height={38} alt="logo" />

        <StartPage />
      </div>
    </main>
  );
}
