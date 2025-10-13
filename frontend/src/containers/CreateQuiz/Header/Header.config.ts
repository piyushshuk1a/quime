import type { QuestionConfig } from '@/context';

import type { QuestionType } from '../QuestionPanel';

export const getQuestionsForApi = (questions: QuestionConfig[]) => {
  const quesData = questions.map(
    ({ questionText, questionType, points, order, options }) => {
      {
        const correctOptions: string[] = [];
        const mappedOptions = options.map(({ label, id, checked }) => {
          if (checked) correctOptions.push(id);
          return { label, id };
        });

        return {
          questionText,
          questionType: questionType as QuestionType,
          points: parseInt(points),
          order,
          options: mappedOptions,
          correctOptions,
        };
      }
    },
  );

  return quesData;
};
