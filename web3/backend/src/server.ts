import express from 'express';
import { errorHandler } from './error-handler/error-handler';
import cors from 'cors';
// @router manage
import TransRouter from './routes/transaction.route';

const app = express();
const options: cors.CorsOptions = {
  origin: '*',
};
// Then pass these options to cors:
app.use(cors(options));
// @parse requests of content-type: application/json
// @parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/transaction', TransRouter);

// @registration of handler
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Application started on port 3001!');
});
