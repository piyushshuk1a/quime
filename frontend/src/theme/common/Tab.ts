import { alpha, type Components } from '@mui/material';

import { THEME_COLORS } from '../theme.constants';

export const MuiTab: Components['MuiTab'] = {
  styleOverrides: {
    root: {
      '&.Mui-selected': {
        background: alpha(THEME_COLORS.primary.main, 0.1),
      },
    },
  },
};

export const MuiTabs: Components['MuiTabs'] = {
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${alpha(THEME_COLORS.primary.main, 0.3)}`,
    },
  },
};
