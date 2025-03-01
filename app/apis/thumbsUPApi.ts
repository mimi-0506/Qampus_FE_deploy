import toast from 'react-hot-toast';
import {fetchWithAuth} from './clientFetch';

export const setThumbsUP = async (answerId: number) => {
  try {
    const data = await fetchWithAuth({
      method: 'POST',
      url: `/like?answer=${answerId}`,
    });

    if (data?.success) toast.success('좋아요를 눌렀습니다');

    return data?.success;
  } catch (error) {
    console.error('Error occurred while setting thumbs up:', error);
    toast.error('좋아요 전송 실패');
    return false;
  }
};

export const deleteThumbsUP = async (answerId: number) => {
  try {
    const data = await fetchWithAuth({
      method: 'DELETE',
      url: `/like?answer=${answerId}`,
    });

    if (data?.success) toast.success('좋아요를 취소했습니다');

    return data?.success;
  } catch (error) {
    console.error('Error occurred while deleting thumbs up:', error);
    toast.error('좋아요 취소 실패');
    return false;
  }
};
