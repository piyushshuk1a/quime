import admin from 'firebase-admin';

export interface User {
  userId: string;
  email: string;
  role: 'ADMIN' | 'CANDIDATE';
  createdAt: admin.firestore.FieldValue;
  lastLoginAt?: admin.firestore.FieldValue;
  profilePictureUrl?: string;
  firstName: string;
  lastName: string;
}
