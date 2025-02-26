export type questionType = {
  question_id: number;
  title: string;
  university_name: string;
  major: string;
  curious_count: number;
  view_count: number;
  total_score: number;
};

export type answerType = {
  question_id: number;
  answer_id: number;
  title: string;
  university_name: string;
  content: string;
  like_count: number;
};

export type userMainDataType = {
  weekly_questions: questionType[];
  popular_answers: answerType[];
};
