import Info from './_component/Info';
import UnivMap from './_component/UnivMap';

export const metadata = {
  title: '커뮤니티 | MyApp',
  description: '사용자들이 자유롭게 의견을 나누는 공간입니다.',
};

export default function CommunityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Info />
      <UnivMap />
    </main>
  );
}
