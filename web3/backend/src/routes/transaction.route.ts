import { Router } from 'express';
import { awaitHandler } from '../middleware/awaitHandler.middleware';
import Transation from '../controllers/transaction.controller';

const router = Router();
const TransObj = new Transation();

router.get('/send', awaitHandler(TransObj.TransactionChecker));

export default router;
