import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router';

import { THEME } from '@/theme';

import { AppRoutes } from './routes';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>
);
