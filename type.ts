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
  createdDate: string | number[];
  like_count: number;
  is_chosen: boolean;
  imageUrls?: string[];
  universityName: string;
};

export type questionDetailType = {
  questionId: number;
  title: string;
  content: string;
  universityName: string;
  createdDate: string | number[];
  viewCnt: number;
  curious_count: number;
  curious: boolean;
  imageUrls?: string[];
  answers?: answerDetailType[];
};

export type detailDataType = {
  question_id: number;
  title: string;
  content: string;
  university_name: string;
  created_date: string;
  viewCnt: number;
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

  last_month_major_ranking: number;
  last_month_ranking: number;
  this_month_major_ranking: number;
  this_month_ranking: number;
  university_name: string;
};

export type userMainDataType = {
  weeklyQuestions: questionType[];
  weeklyAnswers: answerType[];
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

export type communityUnivType = {
  university_id: number;
  university_name: string;
  ranking: number;
  participant_count: number;
  rate: number;
  choice_cnt: number;
  location: [number, number];
};
