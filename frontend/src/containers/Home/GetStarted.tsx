import { RocketLaunch } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { Button, Container } from '@/components';

export const GetStarted = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={80}
      sx={{
        background:
          'linear-gradient(to right, rgb(139, 92, 246), rgb(59, 130, 246), rgb(6, 182, 212))',
      }}
    >
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        gap={16}
      >
        <Typography component="h2" variant="h4">
          Ready to Challenge Your Mind?
        </Typography>
        <Typography>
          Join thousands of quiz enthusiasts and start your learning journey
          today.
        </Typography>
        <Box display="flex" justifyContent="center" gap={12} marginTop={20}>
          <Button color="white" startIcon={<RocketLaunch />}>
            Start Your First Quiz
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
