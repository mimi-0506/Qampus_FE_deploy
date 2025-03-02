const API_BASE_URL = process.env.NEXT_PUBLIC_API_DOMAIN?.replace(/\/$/, '');

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: unknown;
  cache?: boolean;
  isFormData?: boolean;
}

export async function fetchWithAuth({
  method,
  url,
  body,
  cache,
  isFormData = false,
}: FetchOptions) {
  console.log('📌 fetchWithAuth 호출 URL:', url);

  const accessToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('accessToken='))
    ?.split('=')[1]
    .replace('Bearer ', '');

  if (!accessToken) {
    window.location.href = '/login';
  }

  const fixedUrl = `${API_BASE_URL}/${url.replace(/^\//, '')}`;

  const headers: HeadersInit = {
    Authorization: `${accessToken}`,
  };

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  const requestBody =
    isFormData && body instanceof FormData ? body : JSON.stringify(body);

  const response = await fetch(fixedUrl, {
    method,
    headers,
    body: requestBody,
    cache: cache ? 'force-cache' : 'no-store',
    credentials: 'include',
  });

  if (response.status === 401) {
    window.location.href = '/login';
    return;
  }

  const data = await response.json();

  console.log('fetchWithAuth', data);

  return data;
}

export async function fetchWithoutAuth({
  method = 'GET',
  url,
  body,
  cache = false,
}: FetchOptions) {
  const fixedUrl = `${API_BASE_URL}/${url.replace(/^\//, '')}`;
  console.log('📌 최종 요청 URL:', fixedUrl);

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: cache ? 'force-cache' : 'no-store',
    ...(method !== 'GET' && body ? {body: JSON.stringify(body)} : {}),
  };

  const response = await fetch(fixedUrl, options);

  if (response.status === 401) {
    window.location.href = '/login';
    return;
  }

  const data = await response.json();

  return data;
}
