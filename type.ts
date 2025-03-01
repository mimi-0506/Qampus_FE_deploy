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

export type answerDetailType = {
  answer_id: number;
  user_id: number;
  content: string;
  created_date: string;
  like_count: number;
  is_chosen: boolean;
  images?: string[];
};

export type questionDetailType = {
  question_id: number;
  title: string;
  content: string;
  university_name: string;
  created_date: string;
  view_cnt: number;
  curious_count: number;
  answer_cnt?: number;
};

export type ViewQuestionProps = {
  question: questionDetailType;
  answers: answerDetailType[];
};

export type userHomeDtoType = {
  name: string;
  universityName: string;
  major: string;
};

export type userMainDataType = {
  weekly_questions: questionType[];
  popular_answers: answerType[];
  userHomeDto: userHomeDtoType;
};

export type PreviewCardProps = {
  id?: number;
  title: string;
  content: string;
  answerCount: number;
  createdDate: string;
};

export type universityType = {
  choice_cnt: number;
  participant_count: number;
  ranking: number;
  rate: number;
  university_id: number;
  university_name: string;
  button?: string;
};

export type rankType = 'weekly' | 'monthly';
