const API_BASE_URL = process.env.NEXT_PUBLIC_API_DOMAIN;

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: Record<string, unknown>;
  cache?: boolean;
}

export async function fetchWithAuth({method, url, body, cache}: FetchOptions) {
  const accessToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('accessToken='))
    ?.split('=')[1];

  console.log('accessToken', accessToken);
  if (!accessToken) window.location.href = '/logout';

  const response = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: cache ? 'force-cache' : 'no-store',
  });

  const data = await response.json();

  console.log('fetchWithAuth', data);

  return data;
}

export async function fetchWithoutAuth({
  method = 'GET',
  url,
  body,
  cache = false,
}: {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: unknown;
  cache?: boolean;
}) {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: cache ? 'force-cache' : 'no-store',
    ...(method !== 'GET' && body ? {body: JSON.stringify(body)} : {}),
  };

  const response = await fetch(`${API_BASE_URL}${url}`, options);

  const data = await response.json();

  //차후 에러일괄처리 추가

  return data;
}
