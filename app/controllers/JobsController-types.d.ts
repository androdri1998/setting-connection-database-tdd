import { Request, Response } from "express";

export interface IJobController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createJob: (req: Request, res: Response) => Promise<any>;
}
