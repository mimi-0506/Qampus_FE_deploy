import toast from 'react-hot-toast';
import {fetchWithAuth} from './clientFetch';

export const setCurious = async (questionId: number) => {
  const data = await fetchWithAuth({
    method: 'POST',
    url: `/curious?question=${questionId}`,
  });
  if (data?.success) toast.success('나도 궁금해요!');
  else toast.error('문제가 발생했습니다.');

  return data?.success;
};

export const deleteCurious = async (questionId: number) => {
  const data = await fetchWithAuth({
    method: 'DELETE',
    url: `/curious?question=${questionId}`,
  });
  if (data?.success) toast.success('궁금해요를 취소했습니다');
  else toast.error('문제가 발생했습니다.');

  return data?.success;
};
