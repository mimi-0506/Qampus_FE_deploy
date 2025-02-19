import InfoCard from './_components/InfoCard';

export const metadata = {
  title: '마이페이지 | MyApp',
  description: '마이페이지입니다.',
};

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <InfoCard
        name="김하나"
        university="홍익대학교"
        department="경영학부"
        // profileImage="https://example.com/image.jpg"
      />
      <h1 className="text-3xl font-bold">마이페이지</h1>
      <p className="mt-2 text-gray-500">여기는 마이페이지입니다.</p>
    </main>
  );
}
