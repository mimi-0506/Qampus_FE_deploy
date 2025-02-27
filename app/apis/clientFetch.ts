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

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`,
    options,
  );

  const data = await response.json();

  //차후 에러일괄처리 추가

  return data;
}
