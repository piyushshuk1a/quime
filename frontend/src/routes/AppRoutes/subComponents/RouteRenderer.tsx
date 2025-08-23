import { Box, CircularProgress } from '@mui/material';
import { Suspense } from 'react';

import { Navbar } from '@/components';

import { GuardedRoute } from './GuardedRoute';

export const RouteRenderer = ({
  element,
  isGuarded,
  hideNavbar,
}: Omit<RouteConfigItem, 'path'>) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      {!hideNavbar && (
        <>
          <Navbar />
          {/* Shift the content by 72px(height of navbar) since navbar is fixed */}
          <Box height={72}></Box>
        </>
      )}
      {isGuarded ? <GuardedRoute>{element}</GuardedRoute> : element}
    </Suspense>
  );
};
