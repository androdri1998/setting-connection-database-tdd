/* eslint-disable @typescript-eslint/no-explicit-any */
import DatabaseRepositorie from "./DatabaseRepository";
import selectsSqls from "../sqls/selects";

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
}

export default MigrateRepositorie;
