import { Request, Response } from "express";
import HTTPStatusCode from "http-status-codes";

import DatabaseRepository from "../repositories/DatabaseRepository";
import JobRepository from "../repositories/JobRepository";

import { IJobController } from "./JobsController-types";

class JobController implements IJobController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async createJob(req: Request, res: Response): Promise<any> {
    const { name } = req.body;

    const DatabaseRepositoryInstance = new DatabaseRepository();
    const responseFunction = await DatabaseRepositoryInstance.executeWithDatabase(
      async (CONN) => {
        try {
          await DatabaseRepositoryInstance.startTransaction(CONN);

          const JobRepositoryInstance = new JobRepository();
          await JobRepositoryInstance.createJob(CONN, name);

          await DatabaseRepositoryInstance.commit(CONN);
        } catch (err) {
          await DatabaseRepositoryInstance.rollback(CONN);
        }
        return { created: true };
      }
    );

    return res.status(HTTPStatusCode.CREATED).json(responseFunction);
  }
}

export default JobController;
