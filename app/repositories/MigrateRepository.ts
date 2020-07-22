/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import DatabaseRepositorie from "./DatabaseRepository";
import selectsSqls from "../sqls/selects";
import insertsSqls from "../sqls/inserts";

class MigrateRepositorie {
  public async selectOnlyMigrateVersion(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    version: string
  ): Promise<string[]> {
    const DatabaseRepositorieInstance = new DatabaseRepositorie();
    const response = await DatabaseRepositorieInstance.query(
      CONN,
      selectsSqls.SELECT_MIGRATE_VERSION,
      [version]
    );

    return response;
  }

  public async insertMigrateVersion(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    version: string
  ): Promise<string[]> {
    const DatabaseRepositorieInstance = new DatabaseRepositorie();
    const createdAt = moment().utc().format("YYYY-MM-DD HH-mm-ss");
    const versionId = uuidv4();
    const response = await DatabaseRepositorieInstance.query(
      CONN,
      insertsSqls.INSERT_VERSION_MIGRATE,
      [versionId, version, createdAt]
    );

    return response;
  }
}

export default MigrateRepositorie;
