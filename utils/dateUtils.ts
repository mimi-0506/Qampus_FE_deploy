import {formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';

export const convertCreatedDate = (createdDate?: string | number[]) => {
  if (!createdDate) return null;

  // 문자열(ISO 형식)인 경우 Date 객체로 변환
  if (typeof createdDate === 'string') {
    const date = new Date(createdDate);
    return isNaN(date.getTime()) ? null : date;
  }

  // 배열(년, 월, 일, 시, 분, 초, 밀리초)인 경우 Date 변환
  if (Array.isArray(createdDate) && createdDate.length >= 6) {
    const [year, month, day, hour, minute, second, millisec = 0] = createdDate;
    return new Date(year, month - 1, day, hour, minute, second, millisec / 1e6);
  }

  return null;
};

export const getKSTTimeAgo = (date: Date | null) => {
  if (!date) return '등록일 없음';
  return formatDistanceToNow(date, {addSuffix: true, locale: ko});
};
