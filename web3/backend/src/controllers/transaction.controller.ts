import { NextFunction, Request, Response } from 'express';
import { Color } from 'colors';
class Transation {
  constructor() {
    console.log('\x1b[31m%s\x1b[0m', 'Transation called');
  }
  public async TransactionChecker(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('\x1b[34m%s\x1b[0m', 'TransactionChecker Called.');
    console.log('\x1b[32m%s\x1b[0m', JSON.stringify(req.query, undefined, 4));
    res.send('TransactionChecker');
  }
}

export default Transation;
