export const USER_ROLES = {
  admin: 'ADMIN',
  candidate: 'CANDIDATE',
} as const;

export const USER_ERROR_MESSAGES = {
  invalidRole: 'Invalid role',
  invalidEmail: 'Invalid email',
  invalidName: 'Invalid Name',
};

export const ROLE_NAMESPACE = 'https://myapp.com/role';
