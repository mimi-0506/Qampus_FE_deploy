export const metadata = {
  title: '질문 작성 | MyApp',
  description: '사용자가 새로운 질문을 작성할 수 있는 페이지입니다.',
};

export default function QuestionCreatePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">질문 작성 페이지</h1>
      <p className="text-gray-500 mt-2">
        여기는 새로운 질문을 작성할 수 있는 페이지입니다.
      </p>
    </main>
  );
}
