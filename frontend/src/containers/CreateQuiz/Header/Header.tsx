import { RemoveRedEye } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import { Button } from '@/components';
import { useQuizContext } from '@/context';
import { pxToRem } from '@/utils';

export const Header = () => {
  const { questions, validateQuizInfo, validateQuestion } = useQuizContext();
  const { enqueueSnackbar } = useSnackbar();

  const validateBeforeSubmitOrPreview = () => {
    let hasError = false;

    // Validate quiz info and all questions
    const isQuizInfoValid = validateQuizInfo();
    const areQuestionsValid = questions
      .map((question) => validateQuestion(question.order))
      .every((isValid) => isValid);

    if (!isQuizInfoValid || !areQuestionsValid) {
      hasError = true;
    }

    if (hasError) {
      enqueueSnackbar('Please fix the errors', { variant: 'error' });
      return false;
    }

    return true;
  };

  const handlePreview = () => {
    if (!validateBeforeSubmitOrPreview()) {
      return;
    }
  };

  const handleSave = (shouldPublish?: boolean) => {
    console.log('should publish', shouldPublish);
    validateBeforeSubmitOrPreview();
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pt={12}
      pb={36}
    >
      <Stack maxWidth={pxToRem(500)}>
        <Typography component="h2" variant="h4">
          Create New Quiz
        </Typography>
        <Typography sx={{ opacity: 0.65 }}>
          Build engaging quizzes manually or use AI to generate questions
          automatically
        </Typography>
      </Stack>
      <Box display="flex" gap={16}>
        <Button
          color="secondary"
          startIcon={<RemoveRedEye sx={{ fontSize: 16 }} />}
          onClick={handlePreview}
        >
          Preview
        </Button>
        <Button variant="outlined" onClick={() => handleSave()}>
          Save Draft
        </Button>
        <Button onClick={() => handleSave(true)}>Publish Quiz</Button>
      </Box>
    </Box>
  );
};
