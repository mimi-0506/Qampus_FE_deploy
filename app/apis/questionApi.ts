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
  images?: File[];
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
}: {
  questionId: number;
  title: string;
  content: string;
  categoryId: number; //카테고리 ID - 1:전체 2:자연계 3:인문계 4:예체능 5:실무
}) => {
  const data = await fetchWithAuth({
    method: 'POST',
    url: `/questions/${questionId}`,
    body: {
      title: title,
      content: content,
      category_id: categoryId,
    },
  });
  if (data?.success) toast.success('질문을 수정했습니다');
  else toast.error(data.message);

  return data?.success;
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
