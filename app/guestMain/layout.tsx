export const metadata = {
  title: 'Guest Main',
  description: 'Qampus Guest Main Page',
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
