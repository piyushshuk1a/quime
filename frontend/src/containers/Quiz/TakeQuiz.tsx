import { PlayArrow, Visibility } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
  type CircularProgressProps,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { generatePath, useParams } from 'react-router';

import { Container } from '@/components';
import { API_ENDPOINTS } from '@/constants';
import { useRenderQuiz } from '@/context';
import { useMutation } from '@/hooks';
import { Timer } from '@/utils';

import { AttemptQuiz } from './AttemptQuiz';
import { CreatedBy } from './CreatedBy';
import { QuizDetails } from './QuizDetails';

import type { QuizProps } from './Quiz.types';

export const TakeQuiz = ({ isOwner }: Omit<QuizProps, 'isCompleted'>) => {
  const { id } = useParams() as { id: string };
  const { quizInfo } = useRenderQuiz();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { trigger: startQuiz, isMutating: isStartingQuiz } = useMutation<
    Record<string, string>
  >({
    path: generatePath(API_ENDPOINTS.startQuiz, { id }),
    onSuccess: () => {
      setIsQuizOpen(true);
    },
    onError: () => {
      enqueueSnackbar(
        'Oops! Something went wrong. Please try again after refreshing.',
        { variant: 'error' },
      );
    },
  });
  const timerRef = useRef<undefined | NodeJS.Timeout>(undefined);
  const [remainingTime, setRemainingTime] = useState('');

  const quizTimer = new Timer(
    quizInfo.durationMinutes * 60 * 1000,
    handleSubmit,
  );

  const handleStartQuiz = () => {
    startQuiz({});
    quizTimer.start();
    timerRef.current = setInterval(() => {
      setRemainingTime(quizTimer.getFormattedRemainingTime());
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  function handleSubmit() {}

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Container component={Stack} gap={20} width="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={20}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: 700 }}>
            {quizInfo.title}
          </Typography>
          {!isOwner && (
            <Button
              color="primary"
              variant="contained"
              startIcon={
                isStartingQuiz ? (
                  <CircularProgress
                    color={'white' as CircularProgressProps['color']}
                    size={16}
                    sx={{ mr: 4 }}
                  />
                ) : (
                  <PlayArrow />
                )
              }
              onClick={handleStartQuiz}
            >
              Start Quiz
            </Button>
          )}
          {isOwner && (
            <Button
              color="primary"
              variant="contained"
              startIcon={<Visibility />}
            >
              Preview Quiz
            </Button>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" gap={20}>
          <Stack width="80%" gap={20}>
            <QuizDetails />
          </Stack>
          <Stack minWidth={300} width="20%" gap={20}>
            <CreatedBy />
          </Stack>
        </Box>
      </Container>
      <AttemptQuiz
        remainingTime={remainingTime}
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </Box>
  );
};
