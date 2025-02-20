export const metadata = {
  title: '답변하기 | MyApp',
  description: '질문에 대해 답변을 남기는 공간입니다.',
};

export default function AnswerMainPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">답변하기 메인페이지</h1>
      <p className="mt-2 text-gray-500">여기는 답변하기 메인 페이지입니다.</p>
    </main>
  );
}
