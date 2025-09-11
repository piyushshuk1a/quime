import { RemoveRedEye } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

import { Button } from '@/components';
import { pxToRem } from '@/utils';

export const Header = () => (
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
      >
        Preview
      </Button>
      <Button variant="outlined">Save Draft</Button>
      <Button>Publish Quiz</Button>
    </Box>
  </Box>
);
