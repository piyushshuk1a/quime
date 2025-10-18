import { type CardProps, Card as MuiCard } from '@mui/material';

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <MuiCard
      {...rest}
      sx={{
        ...rest?.sx,
        background: '#1F2937',
        borderRadius: 2,
        p: 16,
        width: '100%',
      }}
      variant="outlined"
    >
      {children}
    </MuiCard>
  );
};
