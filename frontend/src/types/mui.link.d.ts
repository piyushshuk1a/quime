import '@mui/material/Link';

/**
 * Module augmentation to add props related to react-router Link component
 */
declare module '@mui/material/Link' {
  interface LinkOwnProps {
    to: string;
    href?: never;
  }
}
