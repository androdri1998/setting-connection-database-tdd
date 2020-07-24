import { databaseTables } from "../utils/configs";
import { IAltersSqls } from "./alters-types";

const altersSqls: IAltersSqls = {
  ADD_COLUMN_CREATED_AT_TABLE_JOBS: `ALTER TABLE ${databaseTables.jobs}
    ADD COLUMN created_at DATETIME NOT NULL;`,
  DROP_COLUMN_CREATED_AT_TABLE_JOBS: `ALTER TABLE ${databaseTables.jobs}
    DROP COLUMN created_at;`,
};

export default altersSqls;
