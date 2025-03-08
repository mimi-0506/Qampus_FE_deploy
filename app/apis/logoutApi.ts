import toast from 'react-hot-toast';
import {fetchWithAuth} from './clientFetch';

export const postLogout = async () => {
  try {
    const data = await fetchWithAuth({
      method: 'POST',
      url: '/auth/logout/kakao',
    });

    if (data?.success) {
      toast.success('로그아웃 성공');
      removeAccessToken();
      window.location.href = '/';
    } else {
      toast.error(`로그아웃 실패: ${data.message}`);
    }
  } catch (error) {
    console.error('❌ 로그아웃 요청 중 오류 발생:', error);
    toast.error('서버 오류로 로그아웃 실패');
  }
};

const removeAccessToken = () => {
  document.cookie =
    'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
