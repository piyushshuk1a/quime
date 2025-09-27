import { FIRESTORE_COLLECTIONS } from '@/config';
import { db } from '@/firebase';
import { User } from '@/models';

const USERS_COLLECTION = FIRESTORE_COLLECTIONS.users;

export const createUser = async (userData: User): Promise<User> => {
  try {
    const userDocRef = db.collection(USERS_COLLECTION).doc(userData.userId);
    await userDocRef.set(userData);
    return userData;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Could not create user.');
  }
};

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const userDocRef = db.collection(USERS_COLLECTION).doc(userId);
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
