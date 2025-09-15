import { Add, DeleteOutline } from '@mui/icons-material';
import {
  Box,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components';
import { RED } from '@/theme';
import { pxToRem } from '@/utils';

import { FORM_ERRORS, QUESTION_TYPES } from './QuestionPanel.config';
import { QuestionPreview } from './QuestionPreview';

import type {
  OptionType,
  QuestionPanelProps,
  QuestionType,
} from './QuestionPanel.types';

export const QuestionPanel = ({ order }: QuestionPanelProps) => {
  const [questionType, setQuestionType] = useState<string>(
    QUESTION_TYPES.singleSelect,
  );
  const [options, setOptions] = useState<OptionType[]>([
    { id: '1', label: '', checked: false },
    { id: '2', label: '', checked: false },
  ]);
  const [points, setPoints] = useState<string>('1');
  const [questionText, setQuestionText] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<{
    questionText?: string;
    options?: string;
    answer?: string;
    points?: string;
  }>({});
  const [hasError, setHasError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [showPreview, setShowPreview] = useState(false);

  const handleOptionLabelChange = (id: string, newLabel: string) => {
    const option = options.find(({ id: optionId }) => id === optionId);

    if (option?.checked && !newLabel?.trim()) {
      enqueueSnackbar('Unselect before clearing the option', {
        variant: 'error',
      });
      return;
    }

    setOptions((prevOptions) => [
      ...prevOptions.map((option) =>
        option.id === id ? { ...option, label: newLabel } : option,
      ),
    ]);
  };

  const handleMultiSelectAnsChange = (id: string, checked: boolean) => {
    const option = options.find(({ id: optionId }) => id === optionId);

    if (!option?.label?.trim()) {
      enqueueSnackbar('Please update the answer first', {
        variant: 'error',
      });
      return;
    }

    setOptions((prev) => {
      const newState = prev.map((option) => {
        const isChecked = id === option.id ? checked : option.checked;
        return { ...option, checked: isChecked };
      });
      return [...newState];
    });
  };

  const handleAddOption = () => {
    const newOption = {
      id: Date.now().toString(),
      label: ``,
      checked: false,
    };
    setOptions((prevOptions) => [...prevOptions, newOption]);
  };

  const handleDeleteOption = (id: string) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option.id !== id),
    );
  };

  const handleQuestionTypeChange = (type: QuestionType) => {
    setOptions((prev) => [
      ...prev.map((option) => ({ ...option, checked: false })),
    ]);
    setQuestionType(type);
  };

  const validateFields = useCallback(() => {
    const errors: typeof validationErrors = {};

    // Validate question text
    if (!questionText.trim()) {
      errors.questionText = FORM_ERRORS.questionTextRequired;
    }

    // Validate options
    if (options.length < 2) {
      errors.options = FORM_ERRORS.twoOptionRequired;
    } else if (options.some((option) => !option.label.trim())) {
      errors.options = FORM_ERRORS.optionLabelRequired;
    }

    // Validate answer selection
    if (!options.some((option) => option.checked)) {
      errors.answer = FORM_ERRORS.answerRequired;
    }

    // Validate points
    const pointsValue = parseInt(points);
    if (!points || isNaN(pointsValue) || pointsValue <= 0) {
      errors.points = FORM_ERRORS.pointsRequired;
    }

    setValidationErrors(errors);

    const isValid = Object.keys(errors).length === 0;

    return isValid;
  }, [setValidationErrors, points, options, questionText]);

  // Validate on every change if errors has been reported
  useEffect(() => {
    if (hasError) validateFields();
  }, [hasError, questionText, options, points, validateFields]);

  const handleConfirm = () => {
    if (validateFields()) {
      setShowPreview(true);
    } else {
      setHasError(true);
      enqueueSnackbar('Please fix the errors before confirming.', {
        variant: 'error',
      });
    }
  };

  if (showPreview) {
    return (
      <QuestionPreview
        options={options}
        questionText={questionText}
        questionType={questionType}
        points={points}
        order={order}
        onEdit={() => setShowPreview(false)}
      />
    );
  }

  return (
    <Card
      variant="outlined"
      sx={{ width: '100%', p: 20, borderRadius: 2, background: '#1F2937' }}
    >
      <Stack alignItems="flex-start">
        <Typography variant="h6" mb={24}>
          Question {order + 1}
        </Typography>
        <TextField
          label="Question Text"
          placeholder="Enter your question here"
          multiline
          fullWidth
          sx={{ mb: 24 }}
          rows={4}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          error={!!validationErrors.questionText}
          helperText={validationErrors.questionText}
        />
        <FormControl fullWidth sx={{ mb: 24 }}>
          <InputLabel>Question Type</InputLabel>
          <Select
            value={questionType}
            onChange={(e) => handleQuestionTypeChange(e.target.value)}
            label="Question Type"
          >
            <MenuItem value={QUESTION_TYPES.singleSelect}>
              Single Select
            </MenuItem>
            <MenuItem value={QUESTION_TYPES.multiSelect}>Multi Select</MenuItem>
          </Select>
        </FormControl>

        {questionType === QUESTION_TYPES.singleSelect && (
          <RadioGroup
            sx={{ width: '100%' }}
            onChange={(event) => {
              const selectedId = event.target.value;
              setOptions((prevOptions) =>
                prevOptions.map((option) => ({
                  ...option,
                  checked: option.id === selectedId,
                })),
              );
            }}
          >
            <Box display="flex" gap={10}>
              <InputLabel sx={{ mb: 12 }}>Answer Options</InputLabel>
              {(validationErrors.answer || validationErrors.options) && (
                <FormHelperText error>
                  {validationErrors.options ?? validationErrors.answer}
                </FormHelperText>
              )}
            </Box>
            {options.map((option) => (
              <Box key={option.id} display="flex" alignItems="center" mb={8}>
                <FormControlLabel
                  slotProps={{ typography: { sx: { width: '100%' } } }}
                  sx={{ width: '100%', marginRight: 0 }}
                  control={<Radio value={option.id} checked={option.checked} />}
                  label={
                    <TextField
                      fullWidth
                      error={
                        validationErrors.options ? !option.label?.trim() : false
                      }
                      placeholder="Enter the option value"
                      value={option.label}
                      onChange={(e) =>
                        handleOptionLabelChange(option.id, e.target.value)
                      }
                    />
                  }
                />
                <IconButton onClick={() => handleDeleteOption(option.id)}>
                  <DeleteOutline
                    sx={{ fontSize: pxToRem(20), color: RED[500] }}
                  />
                </IconButton>
              </Box>
            ))}
          </RadioGroup>
        )}

        {questionType === QUESTION_TYPES.multiSelect && (
          <Stack gap={2} width="100%">
            <Box display="flex" gap={10}>
              <InputLabel sx={{ mb: 12 }}>Answer Options</InputLabel>
              {(validationErrors.answer || validationErrors.options) && (
                <FormHelperText error>
                  {validationErrors.options ?? validationErrors.answer}
                </FormHelperText>
              )}
            </Box>
            {options.map((option) => (
              <Box key={option.id} display="flex" alignItems="center" mb={8}>
                <Checkbox
                  sx={{ p: 0, mr: 8 }}
                  checked={option.checked}
                  onChange={(_e, checked) =>
                    handleMultiSelectAnsChange(option.id, checked)
                  }
                />
                <TextField
                  error={
                    validationErrors.options ? !option.label?.trim() : false
                  }
                  fullWidth
                  placeholder="Enter the option value"
                  value={option.label}
                  onChange={(e) =>
                    handleOptionLabelChange(option.id, e.target.value)
                  }
                />
                <IconButton onClick={() => handleDeleteOption(option.id)}>
                  <DeleteOutline
                    sx={{ fontSize: pxToRem(20), color: RED[500] }}
                  />
                </IconButton>
              </Box>
            ))}
          </Stack>
        )}

        <Button
          startIcon={<Add />}
          onClick={handleAddOption}
          sx={{ marginTop: 2 }}
          variant="text"
        >
          Add Option
        </Button>

        <Box
          display="flex"
          width="100%"
          mt={20}
          pt={20}
          borderTop="1px solid #35363a"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            label="Points"
            value={points.toString()}
            onChange={(e) => {
              const updatedValue = parseInt(e.target.value);

              if (!updatedValue || !isNaN(updatedValue)) {
                setPoints(isNaN(updatedValue) ? '' : updatedValue.toString());
              }
            }}
            error={!!validationErrors.points}
            helperText={validationErrors.points}
          />
          <Button size="large" onClick={handleConfirm}>
            Confirm
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};
