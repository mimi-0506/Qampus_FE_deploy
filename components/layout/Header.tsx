import Image from 'next/image';
import Link from 'next/link';
import {headers, cookies} from 'next/headers';

const NAV_ITEMS = [
  {label: '질문하기', path: '/question/questionCreate'},
  {label: '답변하기', path: '/answer/answerMain'},
  {label: '커뮤니티', path: '/community'},
];

export default async function Header() {
  const pathname = (await headers()).get('next-url') || '/';
  const isCommunity =
    pathname.includes('community') || pathname.includes('login');
  const isLogin = (await cookies()).has('info');

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[80px] z-50 flex items-center ${
        isCommunity ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex w-[95%] items-center justify-between px-6">
        {/* 로고 아이콘 */}
        <Link href="/" className="relative w-[7.65vw] aspect-[147/26]">
          <Image
            src="/images/logo/logo_mini_black.png"
            alt="logo icon"
            fill
            priority
            className={`${isCommunity ? 'invert' : ''}`}
          />
        </Link>

        {/* 내비게이션 메뉴 */}
        <nav className="hidden gap-16 text-sm md:flex">
          {NAV_ITEMS.map(({label, path}) => (
            <Link key={path} href={path}>
              <span
                className={`underline-offset-8 ${
                  isCommunity ? 'text-white' : 'text-black'
                } ${pathname === path ? 'font-semibold underline' : 'hover:underline'}`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* 로그인/마이페이지 */}
        <div className="ml-16">
          {isLogin ? (
            <Link href="/mypage">
              <Image
                src="/icon/user.svg"
                alt="user icon"
                width={15}
                height={15}
                className={`${isCommunity ? 'invert' : ''}`}
                priority
              />
            </Link>
          ) : (
            <Link
              href="/login"
              className={`flex items-center px-3 py-2 gap-2 rounded-full shadow-md ${
                isCommunity ? 'bg-black text-white' : 'bg-white text-black'
              } shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]`}
            >
              <span
                className={`text-xs font-300 ${isCommunity ? 'text-white' : 'text-black'}`}
              >
                로그인
              </span>
              <Image
                src={
                  isCommunity
                    ? '/svg/right-arrow-white.svg'
                    : '/svg/right-arrow-black.svg'
                }
                alt="arrow"
                width={7}
                height={7}
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
