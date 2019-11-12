import { Request, Response, NextFunction } from 'express';

export const undefinedRoute = ((req: Request , res: Response, next: NextFunction) => {
    const err = {
        status: 404,
        message: 'Not Found',
    };
    next(err);
});