import express, { Request, Response } from 'express';
import cors from 'cors';
import {shutdown, eep} from './cmdfunctions';

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from TypeScript Express!');
});

app.get('/shutdown', async (req: Request, res: Response) => {
  const shutdownData = req.headers['user-agent'];
  console.log(shutdownData);
  
  if (shutdownData && shutdownData.includes('Mozilla/5.0 (Android 15; Mobile; rv:147.0) Gecko/147.0 Firefox/147.0')) {
    shutdown();
  }
  
});

app.get('/sleep', (req: Request, res: Response) => {
  const sleepData = req.headers['user-agent'];
  console.log(sleepData);
  
  if (sleepData && sleepData.includes('Mozilla/5.0 (Android 15; Mobile; rv:147.0) Gecko/147.0 Firefox/147.0')) {
    eep();
  }
  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
