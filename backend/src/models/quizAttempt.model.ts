import { FieldValue } from '@/firebase';

export interface QuizAttempt {
  attemptId?: string;
  quizId: string;
  title: string;
  score: number;
  maxPossibleScore: number;
  percentage: number;
  completedAt?: typeof FieldValue;
  status: 'completed' | 'in_progress';
  answers?: Array<{
    questionId: string;
    userAnswerIds: string[];
    isCorrect: boolean;
  }>;
}
