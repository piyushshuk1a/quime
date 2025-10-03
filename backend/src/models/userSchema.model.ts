import { FieldValue } from '@/firebase';

export interface User {
  userId: string;
  email: string;
  role: 'ADMIN' | 'CANDIDATE';
  createdAt: typeof FieldValue;
  lastLoginAt?: typeof FieldValue;
  profilePictureUrl?: string;
}
