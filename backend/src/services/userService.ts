import admin from 'firebase-admin';

import { FIRESTORE_COLLECTIONS } from '@/config';
import { db } from '@/firebase';
import { Quiz, QuizAttempt, User } from '@/models';

export const createUser = async (userData: User): Promise<User> => {
  try {
    const userDocRef = db
      .collection(FIRESTORE_COLLECTIONS.users)
      .doc(userData.userId);

    await userDocRef.set(userData);
    return userData;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Could not create user.');
  }
};

export const updateUser = async (userId: string, userData: Partial<User>) => {
  const userDocRef = db.collection(FIRESTORE_COLLECTIONS.users).doc(userId);
  await userDocRef.set(userData, { merge: true });
};

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const userDocRef = db.collection(FIRESTORE_COLLECTIONS.users).doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      return null;
    }

    return userDoc.data() as User;
  } catch (error) {
    console.error('Error querying a user:', error);
    throw new Error('Could not query the user');
  }
};

export const recordQuizAttempt = async (
  userId: string,
  attemptData: QuizAttempt,
): Promise<void> => {
  try {
    const userDocRef = db.collection(FIRESTORE_COLLECTIONS.users).doc(userId);
    const quizAttemptsCollectionRef = userDocRef.collection(
      FIRESTORE_COLLECTIONS.quizzesAttempted,
    );

    // Add a new document for this attempt
    await quizAttemptsCollectionRef.add(attemptData);
  } catch (error) {
    console.error('Error recording quiz attempt:', error);
    throw new Error('Could not record quiz attempt.');
  }
};

export const getUserQuizAttempts = async (
  userId: string,
): Promise<QuizAttempt[]> => {
  try {
    const userDocRef = db.collection(FIRESTORE_COLLECTIONS.users).doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      return [];
    }

    const attemptsSnapshot = await userDocRef
      .collection(FIRESTORE_COLLECTIONS.quizzesAttempted)
      .get();
    const attempts: QuizAttempt[] = [];
    attemptsSnapshot.forEach((doc) => {
      attempts.push(doc.data() as QuizAttempt);
    });

    return attempts;
  } catch (error) {
    console.error('Error fetching user and attempts:', error);
    throw new Error('Could not fetch user data.');
  }
};

export const getInvitedQuizzesForUser = async (
  userEmail: string,
): Promise<Quiz[]> => {
  try {
    const invitedQuizzesSnapshot = await db
      .collectionGroup(FIRESTORE_COLLECTIONS.invited)
      .where('userEmail', '==', userEmail)
      .get();

    const quizIds: string[] = [];
    invitedQuizzesSnapshot.forEach((doc) => {
      // The parent of the 'invited' document is the specific quiz document.
      const quizId = doc.ref.parent.parent?.id;
      if (quizId) {
        quizIds.push(quizId);
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
