import { databaseTables } from "../utils/configs";
import { IInsertsSqls } from "./inserts-types";

const insertsSqls: IInsertsSqls = {
  INSERT_VERSION_MIGRATE: `INSERT INTO
    ${databaseTables.migrateVersions}(id, version, created_at) VALUES(?, ?, ?);`,
  INSERT_JOB: `INSERT INTO
    ${databaseTables.jobs}(id, job, created_at) VALUES(?, ?, ?);`,
};

export default insertsSqls;
