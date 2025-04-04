export const metadata = {
  title: '게스트 메인 | MyApp',
  description: '로그인하지 않은 사용자를 위한 메인 페이지입니다.',
};
export default function GuestMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      {children}
    </main>
  );
}
