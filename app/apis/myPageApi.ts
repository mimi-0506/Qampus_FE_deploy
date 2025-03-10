import {fetchWithAuth as clientFetchWithAuth} from './clientFetch';

export const getMyQuestionList = async ({
  categoryId,
  page,
  pageSize,
}: {
  categoryId: number;
  page?: number;
  pageSize?: number;
}) => {
  const data = await clientFetchWithAuth({
    method: 'GET',
    url: `/users/mypage?category_id=${categoryId}&page=${page !== undefined ? page - 1 : page}&size=${pageSize}&sort=latest`,
  });

  return data;
};
