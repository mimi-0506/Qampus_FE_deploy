import {fetchWithoutAuth} from './clientFetch';

export const getRank = async (period: 'weekly' | 'monthly', limit?: number) => {
  const data = await fetchWithoutAuth({
    method: 'GET',
    url: `/university/rank?limit=${limit ? limit : 5}&period=${period}`,
  });

  return data?.ranking;
};

export const getUnivDetail = async (name: string) => {
  const data = await fetchWithoutAuth({
    method: 'GET',
    url: `/university/detail?name=${name}`,
  });

  return data;
};
