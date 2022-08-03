/* 
USING DENO NATIVE HTTP SERVER 
*/

import { serve } from 'https://deno.land/std@0.150.0/http/server.ts';

const PORT = 8080;

await serve(handler, { port: PORT });

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  const pathWithMethod = `${req.method} ${url.pathname}`;

  switch (pathWithMethod) {
    case 'GET /': {
      const data = await Deno.readFile('./index.html');
      return new Response(data, { status: 200 });
    }

    case 'GET /index.html': {
      const data = await Deno.readFile('./index.html');
      return new Response(data, { status: 200 });
    }

    case 'GET /about.html': {
      const data = await Deno.readFile('./about.html');
      return new Response(data, { status: 200 });
    }

    case 'GET /contact.html': {
      const data = await Deno.readFile('./contact.html');
      return new Response(data, { status: 200 });
    }

    default: {
      const data = await Deno.readFile('./404.html');
      return new Response(data, { status: 404 });
    }
  }
}

//
//
//
//
//
//
//
/*
USING EXPRESS WITH NODEJS

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
*/
