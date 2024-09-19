import express from 'express';
import http from 'http';
import { Request, Response } from 'express';
import os from 'os';

// Create the express server
const app = express();
const server = http.createServer(app);

// route for / that returns a simple html page with the hostname
app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Hello CSBE!!</h1><p>Host: ${os.hostname()}</p>`);
});

// route for /log/time that logs the current time to the console and returns the time
app.get('/log/time', (req: Request, res: Response) => {
  const time = new Date().toISOString();
  // eslint-disable-next-line no-console
  console.log(`Request received at ${time}`);
  res.send(time);
});

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Express Server started on port ${serverPort}`);
});
