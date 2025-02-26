'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
//서버액션은 get 사용 못함! clientFetch 이용하기

const API_BASE_URL = process.env.NEXT_PUBLIC_API_DOMAIN;

type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: unknown;
  cache?: boolean;
};

export async function fetchWithAuth({method, url, body, cache}: FetchOptions) {
  const token = (await cookies()).get('token')?.value;
  if (!token) redirect('/logout');

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

    if (response.status === 401) redirect('/logout');

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
