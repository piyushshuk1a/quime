import { FIRESTORE_COLLECTIONS } from '@/config';
import { db } from '@/firebase';
import { Question, Quiz } from '@/models';

export const createQuiz = async (
  quizData: Quiz,
  questions: Question[],
): Promise<Quiz> => {
  try {
    const quizDocRef = db.collection(FIRESTORE_COLLECTIONS.quizzes).doc();
    await quizDocRef.set(quizData);

    const batch = db.batch();
    const questionsCollectionRef = quizDocRef.collection(
      FIRESTORE_COLLECTIONS.questions,
    );

    for (const question of questions) {
      const newQuestionRef = questionsCollectionRef.doc();
      batch.set(newQuestionRef, question);
    }
    await batch.commit();

    // 3. Return the created quiz with its ID
    return { ...quizData, id: quizDocRef.id };
  } catch (error) {
    console.error('Error creating quiz:', error);
    throw new Error('Could not create quiz.');
  }
};

export const getQuizById = async (quizId: string): Promise<Quiz | null> => {
  try {
    const quizDocRef = db.collection(FIRESTORE_COLLECTIONS.quizzes).doc(quizId);
    const quizDoc = await quizDocRef.get();

    if (!quizDoc.exists) {
      return null;
    }

    return { id: quizDoc.id, ...(quizDoc.data() as Quiz) };
  } catch (error) {
    console.error('Error fetching quiz:', error);
    throw new Error('Could not fetch quiz.');
  }
};

export const getAllPublicQuizzes = async (): Promise<Quiz[]> => {
  try {
    const quizzesSnapshot = await db
      .collection(FIRESTORE_COLLECTIONS.quizzes)
      .where('isPublic', '==', true)
      .get();

    const quizzes: Quiz[] = [];
    quizzesSnapshot.forEach((doc) => {
      quizzes.push({ id: doc.id, ...(doc.data() as Quiz) });
    });

    return quizzes;
  } catch (error) {
    console.error('Error fetching public quizzes:', error);
    throw new Error('Could not fetch quizzes.');
  }
};
