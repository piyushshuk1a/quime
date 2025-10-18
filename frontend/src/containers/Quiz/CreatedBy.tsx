import { useRenderQuiz } from '@/context';

import { Card } from './Card';

export const CreatedBy = () => {
  const { quizInfo } = useRenderQuiz();

  return <Card>{quizInfo.publishedBy}</Card>;
};
