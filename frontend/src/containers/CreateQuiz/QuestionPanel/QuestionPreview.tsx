import { Edit } from '@mui/icons-material';
import {
  alpha,
  Box,
  Card,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';

import { Button } from '@/components';
import { pxToRem } from '@/utils';

import { QUESTION_TYPES } from './QuestionPanel.config';

import type { QuestionPreviewProps } from './QuestionPanel.types';

export const QuestionPreview = ({
  options,
  questionText,
  points,
  questionType,
  order,
  onEdit,
}: QuestionPreviewProps) => (
  <Card
    variant="outlined"
    sx={{ width: '100%', p: 20, borderRadius: 2, background: '#1F2937' }}
  >
    <Box display="flex" width="100%" justifyContent="space-between" gap={10}>
      <Typography>
        {order + 1}. {questionText}
      </Typography>
      <Box
        px={12}
        py={4}
        borderRadius={pxToRem(4)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor={alpha('#8B5CF6', 0.4)}
        minWidth="fit-content"
      >
        <Typography fontSize="smaller">Points: {points}</Typography>
      </Box>
    </Box>

    <Box pl={5} mt={20}>
      {questionType === QUESTION_TYPES.singleSelect && (
        <RadioGroup sx={{ width: '100%' }}>
          {options.map((option) => (
            <Box key={option.id} display="flex" alignItems="center" mb={8}>
              <Radio checked={option.checked} sx={{ mr: 8 }} />
              <Typography>{option.label}</Typography>
            </Box>
          ))}
        </RadioGroup>
      )}
      {questionType === QUESTION_TYPES.multiSelect && (
        <Stack gap={2} width="100%">
          {options.map((option) => (
            <Box key={option.id} display="flex" alignItems="center" mb={8}>
              <Checkbox sx={{ p: 0, mr: 8 }} checked={option.checked} />
              <Typography>{option.label}</Typography>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
    {onEdit && (
      <Box width="100%" display="flex" justifyContent="flex-end">
        <Button
          color="secondary"
          onClick={onEdit}
          startIcon={<Edit sx={{ fontSize: `${pxToRem(16)} !important` }} />}
        >
          Edit
        </Button>
      </Box>
    )}
  </Card>
);
