import Image from 'next/image';

export const metadata = {
  title: '로그인 | MyApp',
  description: '로그인하지 않은 사용자를 위한 메인 페이지입니다.',
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <Image src="/images/login/bg.png" fill alt="bg" sizes="100vw" />
      <div className="flex flex-col justify-center item-center w-[35.4vw] aspect-[680/750] rounded-3xl overflow-hidden relative">
        <Image
          src="/images/login/box.png"
          fill
          alt="box"
          sizes="35.4vw"
          className="absolute z-0"
        />
        <div className="aboslute z-10 flex flex-col justify-center items-center">
          <div className="relative w-[9vw] aspect-[176/38]">
            <Image
              src="/images/logo/logo_mini_white.png"
              fill
              alt="logo"
              sizes="9vw"
            />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
