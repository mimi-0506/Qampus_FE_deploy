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

export type rankType = {
  university_id: number;
  university_name: string;
  ranking: number;
  participant_count: number;
  rate: number;
  choice_cnt: number;
  button?: string;
};

export type PreviewCardProps = {
  id?: number;
  title: string;
  content: string;
  answerCount: number;
  createdDate: string;
};
