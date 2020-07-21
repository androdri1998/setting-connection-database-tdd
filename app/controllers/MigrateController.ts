import migrations from "../scripts/migrations";
import { databaseTables } from "../utils/configs";
import DatabaseRepository from "../repositories/DatabaseRepository";
import MigrateRepository from "../repositories/MigrateRepository";

enum EMigrates {
  UP = "up",
  DOWN = "down",
}

class MigrateController {
  private async executeMigration(type: EMigrates, executeAll: boolean) {
    const DatabaseRepositoryInstance = new DatabaseRepository();
    DatabaseRepositoryInstance.executeWithDatabase(async (CONN) => {
      const actions: string[] = [];
      const MigrateRepositoryInstance = new MigrateRepository();
      for (const key in migrations) {
        // const migrate = migrations[key];
        // if (Number(key) === 0) {
        //   // const hasTable = await MigrateRepositoryInstance.selectOnlyMigrateVersion(
        //   //   CONN,
        //   //   databaseTables.migrateVersions
        //   // );
        //   // console.log(hasTable);
        //   // const versionArr = await MigrateRepositoryInstance.selectOnlyMigrateVersion(
        //   //   CONN,
        //   //   migrate.version
        //   // );
        //   // for (const scriptObj of migrate.up) {
        //   //   await DatabaseRepositoryInstance.create(CONN, scriptObj.script);
        //   //   actions.push(scriptObj.description);
        //   // }
        // } else {
        //   try {
        //     // const versionArr = await MigrateRepositoryInstance.selectOnlyMigrateVersion(
        //     //   CONN,
        //     //   migrate.version
        //     // );
        //     // for (const scriptObj of migrate.up) {
        //     //   await DatabaseRepositoryInstance.create(CONN, scriptObj.script);
        //     //   actions.push(scriptObj.description);
        //     // }
        //     // console.log("VERSION", versionArr);
        //   } catch (err) {
        //     console.log("version already created");
        //   }
        // }
      }
      console.log(actions);
    });

    return executeAll;
  }

  public async upMigrate(): Promise<void> {
    this.executeMigration(EMigrates.UP, false);
  }

  public async upAllMigrations(): Promise<void> {
    this.executeMigration(EMigrates.UP, true);
  }

  public async downMigrate(): Promise<void> {
    this.executeMigration(EMigrates.DOWN, false);
  }

  public async downAllMigrate(): Promise<void> {
    this.executeMigration(EMigrates.DOWN, true);
  }
}

export default MigrateController;
