import { Stack, Typography, type BoxProps } from '@mui/material';

import { ScreenCenter } from '../ScreenCenter';

export const DataNotAvailable = ({
  message,
  imgHeight = 300,
  ...rest
}: BoxProps & { message: string; imgHeight?: number }) => (
  <ScreenCenter {...rest}>
    <Stack gap={32} alignItems="center">
      <img height={imgHeight} src="/empty-state.svg" />
      <Typography component="h1" variant="h6">
        {message}
      </Typography>
    </Stack>
  </ScreenCenter>
);
