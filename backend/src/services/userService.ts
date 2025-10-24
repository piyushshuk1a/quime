import { FIRESTORE_COLLECTIONS } from '@/config';
import { db } from '@/firebase';
import { User } from '@/models';

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
