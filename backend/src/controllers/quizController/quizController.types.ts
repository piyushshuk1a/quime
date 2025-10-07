import { Question, Quiz } from '@/models';

export type CreateQuizBody = Omit<
  Quiz,
  'isPublic' | 'totalPoints' | 'publishedBy'
> & { questions: Question[] };
