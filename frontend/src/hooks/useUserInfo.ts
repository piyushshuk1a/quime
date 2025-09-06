import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';

import { ROLE_NAMESPACE } from '@/constants';

import type { UserRoles } from './useSignupRole';

export const useUserInfo = () => {
  const { user, isAuthenticated } = useAuth0();

  const data = useMemo(
    () => ({
      ...user,
      role: user?.[ROLE_NAMESPACE] as UserRoles | undefined,
      id: user?.sub,
      isAuthenticated,
    }),
    [user, isAuthenticated],
  );

  return data;
};
