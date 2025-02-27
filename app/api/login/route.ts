import {cookies} from 'next/headers';

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return new Response(JSON.stringify({error: 'No code provided'}), {
      status: 400,
    });
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/login/kakao?code=${code}`,
      {method: 'GET', headers: {'Content-Type': 'application/json'}},
    );

    const data = await response.json(); // JSON 형식으로 변환
    const token = response.headers.get('authorization') || '';

    const cookieStore = await cookies();
    cookieStore.set('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return new Response(JSON.stringify({...data}), {status: 200});
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({error: '노드 서버에서 토큰 꺼내기 로직 실패'}),
      {
        status: 500,
      },
    );
  }
}
