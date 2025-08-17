import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';

import { GuardedRoute } from './GuardedRoute';

export const RouteRenderer = ({
  element,
  isGuarded,
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
      {isGuarded ? <GuardedRoute>{element}</GuardedRoute> : element}
    </Suspense>
  );
};
