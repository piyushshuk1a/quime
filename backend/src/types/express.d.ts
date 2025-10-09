declare namespace Express {
  export interface AuthPayload {
    iss: string;
    sub: string;
    aud: string | string[];
    iat: number;
    exp: number;

    // Custom claim for role
    'https://myapp.com/role'?: string;
  }

  export interface Request {
    auth?: { payload: AuthPayload };
  }
}
