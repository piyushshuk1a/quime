import { NextFunction, Request, Response } from 'express';

import { ROLE_NAMESPACE, USER_ROLES } from '@/config';

export const checkRole = (role: ObjectValuesUnion<typeof USER_ROLES>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.auth?.[ROLE_NAMESPACE];

    if (userRole !== role) {
      return res.status(403).json({ message: 'Forbidden: insufficient role' });
    }

    next();
  };
};
