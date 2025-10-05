import admin from 'firebase-admin';

export interface QuizAttempt {
  attemptId?: string;
  quizId: string;
  title: string;
  score: number;
  maxPossibleScore: number;
  percentage: number;
  completedAt?: admin.firestore.FieldValue;
  status: 'completed' | 'in_progress';
  answers?: Array<{
    questionId: string;
    userAnswerIds: string[];
    isCorrect: boolean;
  }>;
}
