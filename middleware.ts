import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {cookies} from 'next/headers';

export async function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const accessToken = request.cookies.get('accessToken');
  const info = request.cookies.get('accessToken');

  if (pathname === '/')
    return NextResponse.redirect(
      new URL(info ? '/userMain' : '/guestMain', request.url),
    );

  if (pathname === '/login') {
    const cookieStore = await cookies();
    cookieStore.getAll().forEach(({name}) => {
      cookieStore.set(name, '', {expires: new Date(0)});
    });
    return NextResponse.next();
  }

  if (!accessToken && pathname !== '/guestMain')
    return NextResponse.redirect(new URL('/', request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/guestMain'],
};
