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
  const isCommunity = pathname === '/community';

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[80px] z-50 flex items-center ${isCommunity ? 'bg-black' : 'bg-white'}`}
    >
      <div className="mx-auto flex w-[95%] items-center justify-between px-6">
        {/* 로고 아이콘 */}
        <Link href="/">
          <Image
            src="/icon/logo.svg"
            alt="logo icon"
            width={70}
            height={30}
            priority
            className={`${isCommunity ? 'fill invert' : ''}`}
          />
        </Link>

        {/* 내비게이션 메뉴 */}
        <nav className="hidden gap-16 text-sm md:flex">
          {NAV_ITEMS.map(({label, path}) => (
            <Link key={path} href={path}>
              <span
                className={`underline-offset-8 ${isCommunity ? 'text-white' : 'text-black'} ${
                  pathname === path
                    ? 'font-semibold underline'
                    : 'hover:underline'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* 마이페이지 아이콘 */}
        <Link href="/mypage" className="ml-16">
          <Image
            src="/icon/user.svg"
            alt="user icon"
            width={15}
            height={15}
            className={`${isCommunity ? 'fill invert' : ''} `}
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
