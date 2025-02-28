import {fetchWithoutAuth, fetchWithAuth} from './clientFetch';

export const getRank = async (period: 'weekly' | 'monthly') => {
  const data = await fetchWithoutAuth({
    method: 'GET',
    url: `/university/rank?limit=5&period=${period}`,
  });

  return data?.rank;
};

export const getUnivDetail = async (name: string) => {
  const data = await fetchWithAuth({
    method: 'GET',
    url: `/university/detail?name=${name}`,
  });

  return data;
};
