import { Box, type BoxProps } from '@mui/material';

export const ScreenCenter = ({ children, ...rest }: BoxProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100%"
    height="calc(100vh - 72px)"
    {...rest}
  >
    {children}
  </Box>
);
