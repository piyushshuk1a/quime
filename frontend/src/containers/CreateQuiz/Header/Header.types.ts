import type { QuestionType } from '../QuestionPanel';

export type Complexity = 'Easy' | 'Medium' | 'Hard' | 'Advanced';

export interface Option {
  id: string;
  label: string;
}

export interface Question {
  questionText: string;
  questionType: QuestionType;
  points: number;
  order: number;
  options: Option[];
  correctOptions: string[];
}

export type CreateQuizPayload = {
  id?: string;
  title: string;
  description: string;
  complexity: Complexity;
  category: string;
  isPublished?: boolean;
  durationMinutes: number;
  questions: Question[];
};
