import { CircularProgress } from '@mui/material';
import { generatePath, useParams } from 'react-router';

import { DataNotAvailable, Error, ScreenCenter } from '@/components';
import { API_ENDPOINTS } from '@/constants';
import { type QuizData } from '@/containers';
import { RenderQuizProvider } from '@/context';
import { useFetch } from '@/hooks';

export const Quiz = () => {
  const { id } = useParams() as { id: string };
  const { isLoading, data, error } = useFetch<QuizData>({
    path: generatePath(API_ENDPOINTS.getQuiz, { id }),
  });

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return (
      <ScreenCenter>
        <CircularProgress />
      </ScreenCenter>
    );
  }

  if (!data) {
    return <DataNotAvailable message="Quiz not found" />;
  }

  return (
    <RenderQuizProvider
      quizData={{ ...data, duration: data.durationMinutes.toString() }}
    >
      <Quiz />
    </RenderQuizProvider>
  );
};
