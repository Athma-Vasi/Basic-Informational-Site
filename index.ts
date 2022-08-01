import express, { Application, Request, Response } from 'express';
import { readFile } from 'fs/promises';

const app: Application = express();

app.get('/', async (req: Request, res: Response) => {
  res.send(await readFile('./index.html', 'utf8'));
});

app.get('/index.html', async (req: Request, res: Response) => {
  res.send(await readFile('./index.html', 'utf8'));
});

app.get('/about.html', async (request, response) => {
  response.send(await readFile('./about.html', 'utf8'));
});

app.get('/contact.html', async (request, response) => {
  response.send(await readFile('./contact.html', 'utf8'));
});

app.get('*', async (request, response) => {
  response.send(await readFile('./404.html', 'utf8'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
