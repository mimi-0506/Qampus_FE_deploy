'use server';

export async function getKakaoUserFromCode(code: string) {
  if (!code) throw new Error('Authorization code is missing');

  // 1️⃣ 인가 코드로 액세스 토큰 요청
  const tokenUrl = 'https://kauth.kakao.com/oauth/token';
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!,
    redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!,
    client_secret: process.env.KAKAO_CLIENT_SECRET || '', // 선택적
    code,
  });

  const tokenRes = await fetch(tokenUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body,
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok || !tokenData.access_token) {
    throw new Error('Failed to get access token');
  }

  const accessToken = tokenData.access_token;

  // 2️⃣ 액세스 토큰으로 사용자 정보 요청
  const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
    headers: {Authorization: `Bearer ${accessToken}`},
  });

  if (!userRes.ok) {
    throw new Error('Failed to fetch user info');
  }

  const userData = await userRes.json();
  return userData; // 🎯 사용자 정보 반환
}
