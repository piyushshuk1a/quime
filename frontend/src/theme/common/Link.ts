import { LinkBehavior } from './subComponents';

import type { Components } from '@mui/material';

export const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    component: LinkBehavior,
  },
  styleOverrides: {
    root: {
      textDecoration: 'none',
      color: 'white',
    },
  },
};
