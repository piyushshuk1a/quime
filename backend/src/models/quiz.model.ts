export type Complexity = 'Easy' | 'Medium' | 'Hard' | 'Advanced';
export type QuestionType = 'single-select' | 'multi-select';

export interface Option {
  id: string;
  label: string;
}

export interface Quiz {
  id?: string; // Firestore document ID
  title: string;
  description: string;
  complexity: Complexity;
  category: string;
  isPublic: boolean;
  totalPoints: number;
  isPublished?: boolean;
  publishedBy: string;
  durationMinutes: number;
  totalQuestions: number;
  // questions: Array<Question>; // Moved to sub-collection logic
}

export interface Question {
  questionText: string;
  questionType: QuestionType;
  points: number;
  order: number;
  options: Option[];
  correctOptions: string[];
}
