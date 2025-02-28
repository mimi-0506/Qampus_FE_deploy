import Cookies from 'js-cookie';

export const setAccessToken = () => {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  if (accessToken) {
    Cookies.set('accessToken', accessToken, {
      expires: 7,
      secure: true,
      sameSite: 'Strict',
    });
    console.log('✅ AccessToken 쿠키 저장');
  }
};

export const getAccessToken = () => Cookies.get('accessToken');
