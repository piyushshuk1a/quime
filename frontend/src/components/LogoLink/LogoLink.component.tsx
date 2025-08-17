import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router';

import { AppLogo } from '../AppLogo';

export const LogoLink = () => {
  return (
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <Box display="flex" gap={6} alignItems="center">
        <AppLogo />
        <Typography
          component="span"
          variant="h5"
          sx={{
            color: 'white',
            lineHeight: 1,
            fontWeight: 900,
            textDecoration: 'none',
            background:
              'linear-gradient(to right, rgb(139, 92, 246), rgb(59, 130, 246))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            top: 2,
          }}
        >
          QuizMaster
        </Typography>
      </Box>
    </NavLink>
  );
};
