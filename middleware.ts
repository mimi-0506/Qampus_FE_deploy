import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const accessToken = request.cookies.get('accessToken');

  if (pathname === '/')
    return NextResponse.redirect(
      new URL(accessToken ? '/userMain' : '/guestMain', request.url),
    );

  if (pathname === '/login') {
    const response = NextResponse.next();
    response.cookies.getAll().forEach(({name}) => {
      response.cookies.delete(name);
    });
    return response;
  }

  if (!accessToken && pathname !== '/guestMain')
    return NextResponse.redirect(new URL('/', request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/guestMain'],
};
