import Header from '@/components/layout/Header';

export const metadata = {
  title: '답변하기 | MyApp',
  description: '질문에 대해 답변을 남기는 공간입니다.',
};

export default function AnswersPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold">답변하기 메인페이지</h1>
      <p className="text-gray-500 mt-2">여기는 답변하기 메인 페이지입니다.</p>
    </main>
  );
}
