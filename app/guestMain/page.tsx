import Page1 from './_components/Page1';
import Page2 from './_components/Page2';
import Page6 from './_components/Page6';
export const metadata = {
  title: '게스트 메인 | MyApp',
  description: '로그인하지 않은 사용자를 위한 메인 페이지입니다.',
};

export default function GuestMainPage() {
  return (
    <main className="scrollbar-hide flex flex-col items-center justify-center min-h-screen overflow-y-auto ">
      <Page1 />
      <Page2 />
      <Page6 />
    </main>
  );
}
