/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import DatabaseRepository from "./DatabaseRepository";
import insertsSqls from "../sqls/inserts";

class JobRepository {
  public async createJob(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    name: string
  ): Promise<string[]> {
    const DatabaseRepositoryInstance = new DatabaseRepository();
    const createdAt = moment().utc().format("YYYY-MM-DD HH-mm-ss");
    const jobId = uuidv4();
    const response = await DatabaseRepositoryInstance.query(
      CONN,
      insertsSqls.INSERT_JOB,
      [jobId, name, createdAt]
    );

    return response;
  }
}

export default JobRepository;
