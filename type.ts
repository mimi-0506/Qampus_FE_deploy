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
  answerId: number;
  user_id: number;
  content: string;
  created_date: string;
  like_count: number;
  chosen: boolean;
  images?: string[];
  universityName: string;
};

export type questionDetailType = {
  questionId: number;
  title: string;
  content: string;
  university_name: string;
  createdDate: string | number[];
  view_cnt: number;
  curious_count: number;
  answer_cnt?: number;
  curious: boolean;
};

export type detailDataType = {
  question_id: number;
  title: string;
  content: string;
  university_name: string;
  created_date: string;
  view_cnt: number;
  curious_count: number;
  answer_cnt?: number;
  answers: answerDetailType[];
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
  weeklyQuestions: questionType[];
  popularAnswers: answerType[];
  userHomeDto: userHomeDtoType;
};

export type PreviewCardProps = {
  id?: number;
  title: string;
  content: string;
  answerCount: number;
  createdDate: string;
  question_id: number;
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
