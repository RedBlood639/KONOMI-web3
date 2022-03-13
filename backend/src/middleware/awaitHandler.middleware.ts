import { NextFunction } from 'express';
import { ErrorCode } from '../error-handler/error-code';
import { ErrorException } from '../error-handler/error-exception';

export const awaitHandler = (middleware: any): any => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      throw new ErrorException(ErrorCode.AsyncError);
    }
  };
};
