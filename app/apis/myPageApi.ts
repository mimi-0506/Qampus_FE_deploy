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
    url: `/users/questions/${categoryId}?page=${page}&size=${pageSize}`,
  });

  return data;
};
