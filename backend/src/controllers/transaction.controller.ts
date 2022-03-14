import { NextFunction, Request, Response } from 'express';

class Transation {
  constructor() {
    console.log('Transation called');
  }
  public async TransactionChecker(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('TransactionChecker Called.', 'color: #00ff00');
    console.log(JSON.stringify(req.query, undefined, 4));
    // console.log(JSON.stringify(currentlyDrinking, undefined, 4));
    res.send('TransactionChecker');
  }
}

export default Transation;
