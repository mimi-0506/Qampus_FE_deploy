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
      `${process.env.BACKEND_URL}/auth/login/kakao?code=${code}`,
      {method: 'GET', headers: {'Content-Type': 'application/json'}},
    );

    const authHeader = response.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('No token received');
    }

    const token = authHeader.split(' ')[1];

    const cookieStore = await cookies();
    cookieStore.set('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return new Response(JSON.stringify({success: true}), {status: 200});
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
