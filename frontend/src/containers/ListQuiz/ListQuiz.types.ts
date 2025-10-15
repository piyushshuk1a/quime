import type { QuizData } from '../Quiz';

export type ListQuizProps = {
  myQuizzes?: boolean;
  invited?: boolean;
};

export type QuizItemProps = Omit<QuizData, 'questions'> & {
  isMyQuiz?: boolean;
};

export type ListQuizParams = {
  myQuizzes?: boolean;
  invited?: boolean;
  email?: string;
};
