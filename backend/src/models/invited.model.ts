import admin from 'firebase-admin';

export interface Invited {
  userEmail: string;
  obtainedPoints?: number;
  status: 'attempted' | 'invite_sent';
  quizId: string;
  invitedAt: admin.firestore.FieldValue;
}
