import Page1 from './_components/Page1';
import Page2 from './_components/Page2';
import Page3 from './_components/Page3';
import Page4 from './_components/Page4';
import Page5 from './_components/Page5';
import Page6 from './_components/Page6';
import Page7 from './_components/Page7';

export const metadata = {
  title: '게스트 메인 | MyApp',
  description: '로그인하지 않은 사용자를 위한 메인 페이지입니다.',
};

export default function GuestMainPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </main>
  );
}
