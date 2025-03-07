import {fetchWithAuth} from '../server/actions/serverFetch';

export const postSetInfo = async (formData: {
  [k: string]: FormDataEntryValue;
}) => {
  return await fetchWithAuth({
    method: 'POST',
    url: `/auth/signup/complete?email=${formData.email}`,
    body: {
      universityName: formData.universityName,
      major: formData.major,
    },
  });
};
