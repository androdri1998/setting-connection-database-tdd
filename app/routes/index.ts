import express from "express";

import JobController from "../controllers/JobController";
import { IJobController } from "../controllers/JobsController-types";

import validateRequestMiddleware from "../middlewares/validate-request-middleware";
import { JobSchema } from "../schemas/job.schema";

class IndexRoutes {
  public mainRoutes: express.Router;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private JobControllerInstance: IJobController;

  constructor() {
    this.JobControllerInstance = new JobController();
    this.mainRoutes = express.Router();

    this.routes();
  }

  private routes(): void {
    this.mainRoutes.post(
      "/",
      validateRequestMiddleware(JobSchema, "body"),
      this.JobControllerInstance.createJob
    );
  }
}

export default IndexRoutes;
