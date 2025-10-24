import admin from 'firebase-admin';

export interface QuizAttempt {
  attemptId?: string;
  quizId: string;
  userId: string;
  score?: number;
  maxPossibleScore: number;
  percentage?: number;
  startedAt: admin.firestore.FieldValue;
  completedAt?: admin.firestore.FieldValue;
  status: 'completed' | 'in_progress';
  answers?: Array<{
    order: number;
    selectedOptions: string[];
    isCorrect: boolean;
  }>;
}
