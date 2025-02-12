'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const NAV_ITEMS = [
  {label: '질문하기', path: '/questionCreate'},
  {label: '답변하기', path: '/answer'},
  {label: '커뮤니티', path: '/community'},
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full h-[50px] bg-white border-b border-gray-200 z-50 flex items-center">
      <div className="w-[95%] mx-auto flex items-center justify-between px-6">
        {/* 로고 아이콘 */}
        <Link href="/">
          <Image
            src="/icon/logo.svg"
            alt="logo icon"
            width={70}
            height={30}
            priority
          />
        </Link>

        {/* 내비게이션 메뉴 */}
        <nav className="hidden md:flex gap-16 text-sm">
          {NAV_ITEMS.map(({label, path}) => (
            <Link key={path} href={path}>
              <span
                className={`text-black underline-offset-8 ${
                  pathname === path
                    ? 'underline font-semibold'
                    : 'hover:underline'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* 마이페이지 아이콘 */}
        <Link href="/mypage">
          <Image
            src="/icon/user.svg"
            alt="user icon"
            width={15}
            height={15}
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
