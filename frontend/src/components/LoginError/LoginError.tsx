import { useAuth0 } from '@auth0/auth0-react';
import { Stack, Typography, type BoxProps } from '@mui/material';

import { Button } from '../Button';
import { ScreenCenter } from '../ScreenCenter';

import type { ReactNode } from 'react';

export const LoginError = ({
  imgHeight = 300,
  message,
  redirectUri = import.meta.env.VITE_APP_BASE_URL as string,
  ...rest
}: BoxProps & {
  imgHeight?: number;
  message?: ReactNode;
  redirectUri?: string;
}) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <ScreenCenter {...rest}>
      <Stack gap={32} alignItems="center">
        <img height={imgHeight} src="/login-error.svg" />
        <Typography component="h1" variant="h6">
          {message ?? (
            <Stack alignItems="center" gap={16}>
              <Typography component="h1" variant="h6">
                Please login to view your quizzes.
              </Typography>
              <Button
                size="large"
                onClick={() =>
                  loginWithRedirect({
                    authorizationParams: { redirect_uri: redirectUri },
                  })
                }
              >
                Login to QuizMaster
              </Button>
            </Stack>
          )}
        </Typography>
      </Stack>
    </ScreenCenter>
  );
};
