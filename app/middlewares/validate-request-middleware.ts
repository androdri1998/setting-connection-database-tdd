import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (schema: any, scope: string) => async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await schema[scope].validateAsync((req as any)[scope]);
  return next();
};
