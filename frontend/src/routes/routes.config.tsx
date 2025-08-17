import React from 'react';

const Home = React.lazy(() => import('@/pages/Home'));

export const ROUTES_CONFIG: RouteConfigItem[] = [
  { path: '/', element: <Home />, isGuarded: false },
];
