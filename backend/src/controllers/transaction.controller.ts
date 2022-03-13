import { NextFunction, Request, Response } from 'express';

class Transation {
  constructor() {
    console.log('Transation called');
  }
  public async TransactionChecker(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('TransactionChecker Called.');
    res.send('TransactionChecker');
  }
}

export default Transation;
