import {
  Autocomplete,
  Box,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { useQuizContext } from '@/context';

import { QUIZ_CATEGORIES, QUIZ_COMPLEXITY } from './QuizInfo.config';

export const QuizInfo = () => {
  const { quizInfo, updateQuizInfo } = useQuizContext();
  const errors = quizInfo.errors;

  return (
    <Card
      variant="outlined"
      sx={{ width: '100%', p: 20, borderRadius: 2, background: '#1F2937' }}
    >
      <Stack gap={16} width="100%">
        <Typography variant="h6" mb={12}>
          Quiz Information
        </Typography>
        <Stack gap={16} width="100%">
          <Box display="flex" gap={16} width="100%">
            <TextField
              required
              fullWidth
              value={quizInfo.title}
              onChange={(e) =>
                updateQuizInfo({ ...quizInfo, title: e.target.value })
              }
              label="Quiz Title"
              helperText={errors?.title}
              error={!!errors?.title}
            />
            <Autocomplete
              sx={{ width: '100%' }}
              options={QUIZ_CATEGORIES}
              value={quizInfo.category}
              onChange={(_e, value) =>
                updateQuizInfo({ ...quizInfo, category: value ?? '' })
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  error={!!errors?.category}
                  helperText={errors?.category}
                  label="Category"
                />
              )}
            />
            <FormControl fullWidth>
              <InputLabel>Complexity</InputLabel>
              <Select
                label="Complexity"
                value={quizInfo.complexity}
                error={!!errors?.complexity}
                onChange={(e) =>
                  updateQuizInfo({ ...quizInfo, complexity: e.target.value })
                }
              >
                <MenuItem value={QUIZ_COMPLEXITY.easy}>Easy</MenuItem>
                <MenuItem value={QUIZ_COMPLEXITY.medium}>Medium</MenuItem>
                <MenuItem value={QUIZ_COMPLEXITY.hard}>Hard</MenuItem>
                <MenuItem value={QUIZ_COMPLEXITY.advanced}>Advanced</MenuItem>
              </Select>
              {errors?.complexity && (
                <FormHelperText error>{errors.complexity}</FormHelperText>
              )}
            </FormControl>
          </Box>
          <TextField
            required
            fullWidth
            value={quizInfo.description}
            error={!!errors?.description}
            helperText={errors?.description}
            onChange={(e) =>
              updateQuizInfo({ ...quizInfo, description: e.target.value })
            }
            label="Description"
            multiline
            rows={3}
          />
        </Stack>
      </Stack>
    </Card>
  );
};
