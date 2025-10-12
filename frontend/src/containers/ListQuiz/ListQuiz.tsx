import { Stack } from '@mui/material';

import { QuizItem } from './QuizItem';

import type { ListQuizProps } from './ListQuiz.types';

export const ListQuiz = ({ myQuizzes = false }: ListQuizProps) => {
  return (
    <Stack mb={20} gap={40}>
      <QuizItem
        isMyQuiz={myQuizzes}
        title="Basics of C"
        complexity="Hard"
        totalQuestions={10}
        totalPoints={50}
        category="Programming"
        durationMinutes={30}
        description=""
      />
      <QuizItem
        isMyQuiz={myQuizzes}
        title="Basics of C"
        complexity="Hard"
        totalQuestions={10}
        totalPoints={50}
        category="Programming"
        durationMinutes={30}
        description=""
      />
      <QuizItem
        isMyQuiz={myQuizzes}
        title="Basics of C"
        complexity="Hard"
        totalQuestions={10}
        totalPoints={50}
        category="Programming"
        durationMinutes={30}
        description=""
      />
    </Stack>
  );
};
