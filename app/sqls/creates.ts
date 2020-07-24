import { databaseTables } from "../utils/configs";
import { ICreatesSqls } from "./creates-types";

const createSqls: ICreatesSqls = {
  CREATE_TABLE_MIGRATE_VERSIONS: `
    CREATE TABLE ${databaseTables.migrateVersions}(
      id VARCHAR(36) PRIMARY KEY,
      version VARCHAR(36) NOT NULL,
      created_at DATETIME NOT NULL
    );
  `,
  CREATE_TABLE_JOBS: `
    CREATE TABLE ${databaseTables.jobs}(
      id VARCHAR(36) PRIMARY KEY,
      job VARCHAR(100) NOT NULL
    );
  `,
};

export default createSqls;
