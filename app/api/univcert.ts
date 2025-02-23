export async function univcertApi(endpoint: string, body: object) {
  const res = await fetch(`https://univcert.com/api/v1/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Key: process.env.NEXT_PUBLIC_UNIVCERT,
      ...body,
    }),
  });

  const data = await res.json();
  return data;
}
