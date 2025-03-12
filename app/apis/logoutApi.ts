import toast from 'react-hot-toast';
import {fetchWithAuth as clientFetchWithAuth} from './clientFetch';

export const postLogout = async () => {
  try {
    const response = await clientFetchWithAuth({
      method: 'POST',
      url: '/auth/logout',
    });

    if (response.status === 200) toast.success('로그아웃 성공');
  } catch (error) {
    console.error('❌ 로그아웃 요청 중 오류 발생:', error);
  }
};
