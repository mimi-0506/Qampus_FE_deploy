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
    url: `/university/detail?universityName=${name}`,
  });

  return data;
};

//현재 토큰 있어야만 작동하는데, 토큰 없이 되도록 수정 요청한 상태
export const getUnivActivity = async (name: string) => {
  const data = await fetchWithoutAuth({
    method: 'GET',
    url: `/activity/recent?universityName =${name}`,
  });

  return data;
};
