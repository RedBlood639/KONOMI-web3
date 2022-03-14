import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import { ErrorCode } from './error-handler/error-code';
import { ErrorException } from './error-handler/error-exception';
import { errorHandler } from './error-handler/error-handler';
import cors from 'cors';
// @router manage
import TransRouter from './routes/transaction.route';

const app = express();
// @parse requests of content-type: application/json
// @parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// @enabling cors for all requests by using cors middleware
app.use(cors());

app.use('/transaction', TransRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorException(ErrorCode.NotFound, { path: 'Endpoint' }));
});

// @registration of handler
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Application started on port 3001!');
});
