'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
//서버액션은 get 사용 못함! clientFetch 이용하기

const API_BASE_URL = process.env.NEXT_PUBLIC_API_DOMAIN;

type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: unknown;
  isFormData?: boolean;
};

export async function fetchWithAuth({method, url, body, cache}: FetchOptions) {
  const accessToken = (await cookies())
    .get('accessToken')
    ?.value.replace('Bearer ', '');

  console.log('accessToken', accessToken);
  if (!accessToken) redirect('/login');

  const response = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: cache ? 'force-cache' : 'no-store',
  });

  const data = await response.json();

  if (response.status !== 200) handleApiError(response.status);
  else return data;
}

export async function fetchWithoutAuth({method, url, body}: FetchOptions) {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    next: {revalidate: false},
    ...(method === 'POST' && body ? {body: JSON.stringify(body)} : {}),
  };

  const response = await fetch(`${API_BASE_URL}${url}`, options);
  const data = await response.json();

  console.log('fetchWithoutAuth', data);

  if (response.status !== 200) handleApiError(response.status);
  else return data;
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
