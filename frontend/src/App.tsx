import { Button, Stack } from '@mui/material';

export const App = () => {
  return (
    <div>
      <h1>Hello Quizme</h1>
      <Stack gap={10} padding={12}>
        <div>
          <Button variant="contained">Primary</Button>
        </div>
        <div>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button variant="text">Primary</Button>
        </div>
        <div>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button variant="outlined">Primary</Button>
        </div>
        <div>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </div>
      </Stack>
    </div>
  );
};
