export const metadata = {
  title: 'Community',
  description: 'Qampus Community Page',
};
export default function GuestMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
