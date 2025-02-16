import ActInfo from './_components/ActInfo';
import UserInfo from './_components/UserInfo';

export const metadata = {
  title: '유저 메인 | MyApp',
  description: '로그인한 사용자를 위한 메인 페이지입니다.',
};

export default function UserMainPage() {
  return (
    <main className="flex flex-col aspect-[1922/2333] w-screen items-center justify-center relative">
      <UserInfo />
      <ActInfo />
    </main>
  );
}
