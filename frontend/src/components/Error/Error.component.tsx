import { Stack, Typography, type BoxProps } from '@mui/material';

import { ScreenCenter } from '../ScreenCenter';

import type { ReactNode } from 'react';

export const Error = ({
  imgHeight = 300,
  message = 'Something went wrong',
  ...rest
}: BoxProps & { imgHeight?: number; message?: ReactNode }) => (
  <ScreenCenter {...rest}>
    <Stack gap={32} alignItems="center">
      <img height={imgHeight} src="/server-error.svg" />
      <Typography component="h1" variant="h6">
        {message}
      </Typography>
    </Stack>
  </ScreenCenter>
);
