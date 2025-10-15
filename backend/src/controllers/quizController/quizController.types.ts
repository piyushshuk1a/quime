import { Question, Quiz } from '@/models';

export type CreateQuizBody = Omit<
  Quiz,
  'isPublic' | 'totalPoints' | 'publishedBy'
> & { questions: Question[] };

export type GetAllQuizzesQueryParams = {
  myQuizzes?: boolean;
  invited: boolean;
  email: string;
};
