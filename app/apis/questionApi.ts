import toast from 'react-hot-toast';
import {fetchWithAuth} from '../apis/clientFetch';

export const setQuestion = async ({
  categoryId,
  content,
  title,
  images,
}: {
  categoryId: number;
  content: string;
  title: string;
  images?: (string | File)[];
}) => {
  const formData = new FormData();
  const requestDto = JSON.stringify({
    title,
    category_id: categoryId,
    content,
  });
  formData.append(
    'requestDto',
    new Blob([requestDto], {type: 'application/json'}),
  );

  if (images && images.length > 0) {
    images?.forEach(image => {
      formData.append('images', image);
    });
  }

  const data = await fetchWithAuth({
    method: 'POST',
    url: `/questions`,
    body: formData,
    isFormData: true,
  });

  return data;
};

export const editQuestion = async ({
  questionId,
  title,
  content,
  categoryId,
  images,
}: {
  questionId: number;
  title: string;
  content: string;
  categoryId: number;
  images?: (string | File)[];
}) => {
  console.log('📌 전달된 데이터:', {title, content, categoryId, images});

  const formData = new FormData();

  const requestDto = JSON.stringify({
    title,
    content,
    category_id: categoryId,
  });

  formData.append(
    'requestDto',
    new Blob([requestDto], {type: 'application/json'}),
  );

  if (images && images.length > 0) {
    images.forEach(image => {
      if (image instanceof File) {
        console.log(`📌 이미지 추가:`, image);
        formData.append('images', image);
      }
    });
  }

  console.log('📌 최종 FormData:', formData);

  const data = await fetchWithAuth({
    method: 'PUT',
    url: `/questions/${questionId}`,
    body: formData,
  });

  console.log('📌 editQuestion 응답:', data);

  if (data?.success) {
    toast.success('질문을 수정했습니다');
    return data;
  } else {
    toast.error(data.message);
    return null;
  }
};

export const deleteQuestion = async (questionId: string | number) => {
  const data = await fetchWithAuth({
    method: 'DELETE',
    url: `/questions/${questionId}`,
  });
  if (data?.success) toast.success('질문을 삭제했습니다');
  else toast.error(data.message);

  return data?.success;
};
