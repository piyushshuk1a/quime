import { Box } from '@mui/material';

import { pxToRem } from '@/utils';

import type { AppLogoProps } from './AppLogo.types';

export const AppLogo = ({ width = 40, height = 40 }: AppLogoProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="30%"
    sx={{
      width: pxToRem(width),
      height: pxToRem(height),
      background:
        'linear-gradient(to right, rgb(139, 92, 246), rgb(59, 130, 246))',
    }}
  >
    <img
      width={width / 2}
      height={height / 2}
      src="/appIcon.svg"
      alt="App Icon"
    />
  </Box>
);
