'use server';

import {cookies} from 'next/headers';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_DOMAIN;

type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: unknown;
  cache?: boolean;
};

async function refreshAccessToken() {
  const refreshToken = (await cookies()).get('refreshToken')?.value;
  if (!refreshToken) {
    throw new Error('Unauthorized: No refresh token');
  }

  //이후 리프레시 토큰 찌르는 api나오면 그걸로 수정 필요
  const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({refreshToken}),
  });

  if (!response.ok) {
    throw new Error('Unauthorized: Failed to refresh token');
  }

  const data = await response.json();
  (await cookies()).set('token', data.accessToken);
  return data.accessToken;
}

export async function fetchWithAuth({method, url, body, cache}: FetchOptions) {
  let token = (await cookies()).get('token')?.value;
  if (!token) {
    token = await refreshAccessToken();
  }

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: cache ? 'force-cache' : 'no-store',
    });

    if (response.status === 401) {
      token = await refreshAccessToken();
      return fetchWithAuth({method, url, body, cache});
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`API Error: ${response.status}`, errorData);
      handleApiError(response.status);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Internal Server Error');
  }
}

//서버액션은 get 사용 못함! clientFetch 이용하기
export async function fetchWithoutAuth({
  method,
  url,
  body,
  cache,
}: FetchOptions) {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: cache ? 'force-cache' : 'no-store',
    ...(method === 'POST' && body ? {body: JSON.stringify(body)} : {}), // POST일 때만 body 추가
  };

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, options);

    console.log(url, response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`API Error: ${response.status}`, errorData);
      handleApiError(response.status);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Internal Server Error');
  }
}

function handleApiError(status: number) {
  if (status === 400) {
    throw new Error('Bad Request');
  } else if (status === 401) {
    throw new Error('Unauthorized');
  } else if (status === 403) {
    throw new Error('Forbidden');
  } else if (status === 404) {
    throw new Error('Not Found');
  } else if (status === 500) {
    throw new Error('Internal Server Error');
  } else {
    throw new Error('Unknown Error');
  }
}
