import toast from 'react-hot-toast';
import {fetchWithAuth} from './clientFetch';

export const setCurious = async (answerId: string) => {
  const data = await fetchWithAuth({
    method: 'POST',
    url: `/like?answer=${answerId}`,
  });
  if (data?.success) toast.success('좋아요를 눌렀습니다');
  else toast.error('문제가 발생했습니다.');

  return data?.success;
};

export const deleteCurious = async (answerId: string) => {
  const data = await fetchWithAuth({
    method: 'DELETE',
    url: `/like?answer=${answerId}`,
  });
  if (data?.success) toast.success('좋아요를 취소했습니다');
  else toast.error('문제가 발생했습니다.');

  return data?.success;
};
