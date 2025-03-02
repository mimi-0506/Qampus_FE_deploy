import {fetchWithAuth as clientFetchWithAuth} from './clientFetch';
export const getAIAnswer = async (questionId: number) => {
  const data = await clientFetchWithAuth({
    method: 'GET',
    url: `/${questionId}/ai`,
  });

  return data;
};
