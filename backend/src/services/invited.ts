import admin from 'firebase-admin';

import { FIRESTORE_COLLECTIONS } from '@/config';
import { db } from '@/firebase';
import { Quiz } from '@/models';

export const getInvitedQuizzesForUser = async (
  userEmail: string,
): Promise<Quiz[]> => {
  try {
    const invitedQuizzesSnapshot = await db
      .collection(FIRESTORE_COLLECTIONS.invited)
      .where('userEmail', '==', userEmail)
      .get();

    const quizIds: string[] = [];
    invitedQuizzesSnapshot.forEach((doc) => {
      const invitationData = doc.data();

      if (invitationData && invitationData.quizId) {
        quizIds.push(invitationData.quizId);
      }
    });

    if (quizIds.length === 0) {
      return [];
    }

    const uniqueQuizIds = [...new Set(quizIds)]; // Remove duplicates

    const quizzesSnapshot = await db
      .collection(FIRESTORE_COLLECTIONS.quizzes)
      .where(admin.firestore.FieldPath.documentId(), 'in', uniqueQuizIds)
      .get();

    const invitedQuizzes: Quiz[] = [];
    quizzesSnapshot.forEach((doc) => {
      invitedQuizzes.push({ id: doc.id, ...(doc.data() as Quiz) });
    });

    return invitedQuizzes;
  } catch (error) {
    console.error('Error fetching invited quizzes for user:', error);
    throw new Error('Could not fetch invited quizzes for user.');
  }
};
