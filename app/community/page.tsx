import Header from '@/components/layout/Header';

export const metadata = {
  title: '커뮤니티 | MyApp',
  description: '사용자들이 자유롭게 의견을 나누는 공간입니다.',
};

export default function CommunityPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold">커뮤니티 페이지</h1>
      <p className="text-gray-500 mt-2">여기는 커뮤니티 메인 페이지입니다.</p>
    </main>
  );
}
