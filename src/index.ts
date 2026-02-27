import express, { Request, Response } from 'express';
import cors from 'cors';
import { shutdown, eep } from './cmdfunctions';
import path from 'path/win32';

const app = express();
const port = 3052;

app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'build/static')));
app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from TypeScript Express!');
});

app.get('/shutdown', async (req: Request, res: Response) => {
  const shutdownData = req.headers['user-agent'];
  console.log(shutdownData);

  if (shutdownData && shutdownData.includes('Mozilla/5.0 (Android 15; Mobile; rv:148.0) Gecko/148.0 Firefox/148.0')) {
    shutdown();
  }

});

app.get('/sleep', (req: Request, res: Response) => {
  const sleepData = req.headers['user-agent'];
  console.log(sleepData);

  if (sleepData && sleepData.includes('Mozilla/5.0 (Android 15; Mobile; rv:148.0) Gecko/147.0 Firefox/147.0')) {
    eep();
  }

});

app.get(/(.*)/, function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, 'build'), headers: { "Content-Type": 'text/html' } });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
