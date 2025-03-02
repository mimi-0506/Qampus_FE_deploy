import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const accessToken = request.cookies.get('accessToken');

  if (pathname === '/')
    return NextResponse.redirect(new URL('/guestMain', request.url));

  if (pathname === '/login') {
    const response = NextResponse.next();
    response.cookies.delete('accessToken');
    return response;
  }

  if (!accessToken && pathname !== '/guestMain')
    return NextResponse.redirect(new URL('/', request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/guestMain'],
};
