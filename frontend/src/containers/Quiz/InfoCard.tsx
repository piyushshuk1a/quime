import { Stack, Typography } from '@mui/material';

import type { InfoCardProps } from './Quiz.types';

export const InfoCard = ({ label, value, color }: InfoCardProps) => {
  return (
    <Stack
      sx={{ background: '#374151', borderRadius: 2, flexGrow: 1 }}
      alignItems="center"
      padding={16}
    >
      <Typography sx={{ color, fontWeight: 700 }} variant="h5">
        {value}
      </Typography>
      <Typography sx={{ opacity: 0.6 }}>{label}</Typography>
    </Stack>
  );
};
