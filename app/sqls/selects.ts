import { databaseTables } from "../utils/configs";
import { ISelectsSqls } from "./selects-types";

const selectsSqls: ISelectsSqls = {
  SELECT_MIGRATE_VERSION: `
    SELECT version FROM ${databaseTables.migrateVersions} WHERE version = ?;
  `,
};

export default selectsSqls;
