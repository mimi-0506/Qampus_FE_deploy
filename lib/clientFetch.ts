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

  if (!response.ok) {
    console.error(
      `[fetchWithoutAuth] 오류: ${response.status}`,
      await response.text(),
    );
  }

  return await response.json();
}
