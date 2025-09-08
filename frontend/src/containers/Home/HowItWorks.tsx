import { Box, Stack, Typography } from '@mui/material';

import { Container } from '@/components';
import { pxToRem } from '@/utils';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up',
      subtitle:
        'Choose your role as admin or candidate and create your account',
      color: '#6366F1',
    },
    {
      title: 'Create or Join',
      subtitle:
        'Admins create quizzes, candidates receive invitations or browse public quizzes',
      color: '#8B5CF6',
    },
    {
      title: 'Take & Track',
      subtitle: 'Take quizzes and track performance with detailed analytics',
      color: '#4ADE80',
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      padding={pxToRem(48, 24)}
      bgcolor="#1E293B"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={60}
      >
        <Stack gap={12} textAlign="center">
          <Typography component="h2" variant="h4">
            How It Works
          </Typography>
          <Typography>Get started in just a few simple steps</Typography>
        </Stack>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={40}
        >
          {steps.map(({ title, color, subtitle }, idx) => (
            <Stack
              width={pxToRem(385)}
              key={color}
              gap={12}
              alignItems="center"
              textAlign="center"
            >
              <Box
                marginBottom={4}
                width={64}
                height={64}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor={color}
                borderRadius="100%"
              >
                <Typography component="span" variant="h5">
                  {idx + 1}
                </Typography>
              </Box>
              <Typography component="h3" variant="h6">
                {title}
              </Typography>
              <Typography sx={{ opacity: 0.9 }}>{subtitle}</Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
