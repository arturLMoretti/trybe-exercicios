// ./index.ts

import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});
console.log('banana');
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});