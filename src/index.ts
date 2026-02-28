import express, { Request, Response } from 'express';
import cors from 'cors';
import { shutdown, eep } from './cmdfunctions';
import path from 'path/win32';

const app = express();
const port = 3052;

app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'build/static')));
app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/shutdown', async (req: Request, res: Response) => {
  const shutdownData = req.headers['user-agent'];
  console.log(shutdownData);
  shutdown();

});

app.get('/sleep', (req: Request, res: Response) => {
  const sleepData = req.headers['user-agent'];
  console.log(sleepData);
  eep();

});

app.get(/(.*)/, function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, 'build'), headers: { "Content-Type": 'text/html' } });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
