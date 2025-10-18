import { PlayArrow, Visibility } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';

import { Container } from '@/components';
import { useRenderQuiz } from '@/context';

import { CreatedBy } from './CreatedBy';
import { QuizDetails } from './QuizDetails';

import type { QuizProps } from './Quiz.types';

export const Quiz = ({ isOwner }: QuizProps) => {
  const { quizInfo } = useRenderQuiz();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Container component={Stack} gap={20} width="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={20}
        >
          <Typography component="h1" variant="h4">
            {quizInfo.title}
          </Typography>
          {!isOwner && (
            <Button
              color="primary"
              variant="contained"
              startIcon={<PlayArrow />}
            >
              Start Quiz
            </Button>
          )}
          {isOwner && (
            <Button color="primary" startIcon={<Visibility />}>
              Preview Quiz
            </Button>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Stack width={'calc(70% - 10px)'}>
            <QuizDetails />
          </Stack>
          <Stack width={'calc(30% - 10px)'}>
            <CreatedBy />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
