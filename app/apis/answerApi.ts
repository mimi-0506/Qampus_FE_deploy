import toast from 'react-hot-toast';
import {fetchWithAuth as clientFetchWithAuth} from './clientFetch';
import {fetchWithAuth as serverFetchWithAuth} from '../server/actions/serverFetch';

export const editAnswer = async (
  answerId: string | number,
  content: string,
) => {
  const data = await serverFetchWithAuth({
    method: 'POST',
    url: `/answer/${answerId}`,
    body: {content},
  });
  if (data?.success) toast.success('답변을 수정했습니다');
  else toast.error(data.message);

  return data?.success;
};

export const deleteAnswer = async (answerId: string | number) => {
  const data = await serverFetchWithAuth({
    method: 'DELETE',
    url: `/answer/${answerId}`,
  });
  if (data?.success) toast.success('답변을 삭제했습니다.');
  else toast.error(data.message);

  return data?.success;
};

export const editAnswerChoice = async ({
  answerId,
  questionId,
  isChosen,
}: {
  answerId: string | number;
  questionId: string | number;
  isChosen: boolean;
}) => {
  const data = await serverFetchWithAuth({
    method: 'PUT',
    url: `/answer/choice`,
    body: {
      question_id: questionId,
      answer_id: answerId,
      is_chosen: isChosen,
    },
  });
  if (data?.success)
    toast.success(
      isChosen ? '답변을 채택했습니다.' : '답변 채택을 취소했습니다.',
    );
  else toast.error(data.message);

  return data?.success;
};

export const setAnswer = async ({
  userId,
  questionId,
  content,
  images,
}: {
  userId: string | number;
  questionId: string | number;
  content: string;
  images?: string[];
}) => {
  const data = await serverFetchWithAuth({
    method: 'POST',
    url: `/answers`,
    body: {
      requestDto: {
        user_id: userId,
        question_id: questionId,
        content: content,
      },
      images: images || [],
    },
  });
  if (data?.success) toast.success('답변을 생성했습니다.');
  else toast.error(data.message);

  return data?.success;
};

export const getAnswerDetail = async (questionId: number) => {
  const data = await clientFetchWithAuth({
    method: 'GET',
    url: `/answers/${questionId}`,
  });

  return data;
};

export const getAnswerListByCategory = async ({
  categoryId,
  size,
  page,
}: {
  categoryId: string | number;
  size: number;
  page: number;
}) => {
  const data = await clientFetchWithAuth({
    method: 'GET',
    url: `/answers/${categoryId}?page=${page}&size=${size}`,
  });

  return data;
};

export const getAnswerSearch = async ({
  search,
  size,
  page,
}: {
  search: string;
  size: number;
  page?: number;
}) => {
  const data = await clientFetchWithAuth({
    method: 'GET',
    url: `/answers/search?value=${search}&page=${page}&size=${size}`,
  });

  return data;
};
