import { databaseTables } from "../utils/configs";
import { ICreatesSqls } from "./creates-types";

const createSqls: ICreatesSqls = {
  CREATE_TABLE_MIGRATE_VERSIONS: `
    CREATE TABLE ${databaseTables.migrateVersions}(
      id VARCHAR(36) PRIMARY KEY,
      version VARCHAR(36) NOT NULL
    );
  `,
  CREATE_TABLE_WORKS: `
    CREATE TABLE ${databaseTables.works}(
      id VARCHAR(36) PRIMARY KEY,
      work VARCHAR(100) NOT NULL
    );
  `,
};

export default createSqls;
