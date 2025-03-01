// import {getAccessToken} from './../../utils/cookie';
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
  const accessToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('accessToken='))
    ?.split('=')[1];

  // const accessToken = getAccessToken();

  if (!accessToken) {
    window.location.href = '/logout';
  }

  const fixedUrl = `${API_BASE_URL}/${url.replace(/^\//, '')}`; // url 앞에 있는 / 제거

  const headers: HeadersInit = {
    Authorization: `Bearer ${accessToken}`,
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

  const data = await response.json();

  console.log('fetchWithAuth', data);

  //차후 에러일괄처리 추가

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
  const data = await response.json();

  //차후 에러일괄처리 추가

  return data;
}
