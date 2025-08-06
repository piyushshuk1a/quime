import 'dotenv/config';
import express from 'express';

import { config } from '@/config';

const app = express();

app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
