import { auth } from 'express-oauth2-jwt-bearer';

import { config } from '@/config';

export const checkJwt = auth({
  audience: config.auth0Audience,
  issuerBaseURL: config.auth0Issuer,
  tokenSigningAlg: 'RS256',
});

export const decodeToken = auth({
  audience: config.auth0Audience,
  issuerBaseURL: config.auth0Issuer,
  tokenSigningAlg: 'RS256',
  authRequired: false,
});
