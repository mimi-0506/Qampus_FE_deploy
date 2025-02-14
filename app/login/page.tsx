export const metadata = {
  title: '로그인 | MyApp',
  description: '로그인하지 않은 사용자를 위한 메인 페이지입니다.',
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">로그인 페이지</h1>
      <p className="mt-2 text-gray-500">여기는 로그인 페이지입니다.</p>
    </main>
  );
}
