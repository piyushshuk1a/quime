import { Request } from 'express';

import { USER_ROLES } from '@/config/user';

type UserIdParam = {
  id: string;
};

export type CreateUserRequest = Request<
  UserIdParam,
  unknown,
  {
    role: ObjectValuesUnion<typeof USER_ROLES>;
    email: string;
    firstName: string;
    lastName: string;
  }
>;
