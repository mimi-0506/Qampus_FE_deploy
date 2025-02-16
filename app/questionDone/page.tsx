import SearchBar from '@/components/SearchBar';
import ViewQuestion from './_components/ViewQuestion';

export const metadata = {
  title: '질문 완료 | MyApp',
  description: '사용자가 질문을 성공적으로 작성한 후 표시되는 페이지입니다.',
};

export default function QuestionDonePage() {
  return (
    <main className="flex w-full h-[calc(100vh-80px)] bg-white flex-col items-center min-h-screen">
      <SearchBar />
      <ViewQuestion />
    </main>
  );
}
