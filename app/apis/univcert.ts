export async function univcertApi(endpoint: string, body: object) {
  const res = await fetch(`https://univcert.com/api/v1/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: process.env.NEXT_PUBLIC_UNIVCERT_API_KEY,
      ...body,
    }),
  });

  const data = await res.json();
  return data;
}
