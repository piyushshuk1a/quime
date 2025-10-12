import type { QuizData } from '../Quiz';

export type ListQuizProps = {
  myQuizzes?: boolean;
};

export type QuizItemProps = Omit<QuizData, 'questions'> & {
  isMyQuiz?: boolean;
};
