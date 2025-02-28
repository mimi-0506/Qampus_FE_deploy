import toast from 'react-hot-toast';
import {fetchWithAuth} from '../server/actions/serverFetch';

export const setQuestion = async ({
  categoryId,
  content,
  userId,
  images,
}: {
  categoryId: string | number;
  content: string;
  userId: string | number;
  images?: string[];
}) => {
  const data = await fetchWithAuth({
    method: 'POST',
    url: `/questions`,
    body: {
      requestDto: {
        user_id: userId,
        category_id: categoryId,
        content: content,
      },
      images: images || [],
    },
  });

  return data;
};

export const editQuestion = async ({
  questionId,
  title,
  content,
  categoryId,
}: {
  questionId: string | number;
  title: string;
  content: string;
  categoryId: string | number; //카테고리 ID - 1:전체 2:자연계 3:인문계 4:예체능 5:실무
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
