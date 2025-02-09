export const metadata = {
  title: '질문 완료 | MyApp',
  description: '사용자가 질문을 성공적으로 작성한 후 표시되는 페이지입니다.',
};

export default function QuestionDonePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">질문 완료 페이지</h1>
      <p className="text-gray-500 mt-2">질문이 성공적으로 등록되었습니다!</p>
    </main>
  );
}
