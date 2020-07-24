import createsSqls from "../sqls/creates";
import altersSqls from "../sqls/alters";
import dropsSqls from "../sqls/drops";
import { databaseTables } from "../utils/configs";

const migrations = [
  {
    version: "1014ad50-fb90-43a0-a5d2-8901524b010d",
    up: [
      {
        script: createsSqls.CREATE_TABLE_MIGRATE_VERSIONS,
        description: `Create table ${databaseTables.migrateVersions}.`,
      },
    ],
    down: [
      {
        script: dropsSqls.DROP_TABLE_MIGRATE_VERSIONS,
        description: `Drop table ${databaseTables.migrateVersions}.`,
      },
    ],
  },
  {
    version: "958581d6-0eeb-405a-a447-10b9b19e350a",
    up: [
      {
        script: createsSqls.CREATE_TABLE_JOBS,
        description: `Create table ${databaseTables.jobs}.`,
      },
    ],
    down: [
      {
        script: dropsSqls.DROP_TABLE_JOBS,
        description: `Drop table ${databaseTables.jobs}.`,
      },
    ],
  },
  {
    version: "10bc92fa-f9e8-4555-9629-b22b0348ec06",
    up: [
      {
        script: altersSqls.ADD_COLUMN_CREATED_AT_TABLE_JOBS,
        description: `Add column 'created_at' in table ${databaseTables.jobs}.`,
      },
    ],
    down: [
      {
        script: altersSqls.DROP_COLUMN_CREATED_AT_TABLE_JOBS,
        description: `Drop column 'created_at' in table${databaseTables.jobs}.`,
      },
    ],
  },
];

export default migrations;
