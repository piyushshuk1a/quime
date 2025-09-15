import type { QUESTION_TYPES } from './QuestionPanel.config';

export type QuestionType = ObjectValuesUnion<typeof QUESTION_TYPES>;

export type QuestionPanelProps = {
  order: number;
  questionText?: string;
  questionId?: string;
  questionType?: QuestionType;
  options?: string[];
  correctAnswer?: string[];
  point?: number;
};

export type OptionType = { id: string; label: string; checked: boolean };

export type QuestionPreviewProps = {
  options: OptionType[];
  questionText: string;
  points: string;
  questionType: string;
  order: number;
  onEdit?: () => void;
};
