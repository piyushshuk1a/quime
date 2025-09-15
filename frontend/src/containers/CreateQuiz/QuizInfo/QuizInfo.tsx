import {
  Autocomplete,
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { QUIZ_CATEGORIES, QUIZ_COMPLEXITY } from './QuizInfo.config';

export const QuizInfo = () => {
  return (
    <Card
      variant="outlined"
      sx={{ width: '100%', p: 20, borderRadius: 2, background: '#1F2937' }}
    >
      <Stack gap={16} width="100%">
        <Typography variant="h6">Quiz Information</Typography>
        <Stack gap={16} width="100%">
          <Box display="flex" gap={16} width="100%">
            <TextField required fullWidth label="Quiz Title" />
            <Autocomplete
              sx={{ width: '100%' }}
              options={QUIZ_CATEGORIES}
              renderInput={(params) => (
                <TextField required {...params} label="Category" />
              )}
            />
            <FormControl fullWidth>
              <InputLabel>Complexity</InputLabel>
              <Select label="Complexity">
                <MenuItem value={QUIZ_COMPLEXITY.easy}>Easy</MenuItem>
                <MenuItem value={QUIZ_COMPLEXITY.medium}>Medium</MenuItem>
                <MenuItem value={QUIZ_COMPLEXITY.hard}>Hard</MenuItem>
                <MenuItem value={QUIZ_COMPLEXITY.advanced}>Advanced</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            required
            fullWidth
            label="Description"
            multiline
            rows={3}
          />
        </Stack>
      </Stack>
    </Card>
  );
};
