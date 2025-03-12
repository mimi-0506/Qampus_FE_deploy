import toast from 'react-hot-toast';
import {fetchWithAuth as clientFetchWithAuth} from './clientFetch';

export const postLogout = async () => {
  return async () => {
    try {
      const response = await clientFetchWithAuth({
        method: 'POST',
        url: '/auth/logout',
      });

      if (response.status === 200) {
        toast.success('로그아웃 성공');
      } else {
        toast.error(`로그아웃 실패: ${response.status}`);
      }
    } catch (error) {
      console.error('❌ 로그아웃 요청 중 오류 발생:', error);
      toast.error('서버 오류로 로그아웃 실패');
    }
  };
};
