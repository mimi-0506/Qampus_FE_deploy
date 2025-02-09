export const metadata = {
  title: '게스트 메인 | MyApp',
  description: '로그인하지 않은 사용자를 위한 메인 페이지입니다.',
};

export default function GuestMainPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">로그인 전 메인 페이지</h1>
      <p className="text-gray-500 mt-2">
        여기는 로그인하지 않은 사용자를 위한 메인 페이지입니다.
      </p>
    </main>
  );
}
