import migrations from "../scripts/migrations";
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
      for (const migrate of migrations) {
        // const MigrateRepositoryInstance = new MigrateRepository();
        // await DatabaseRepositoryInstance.create(CONN, migrate.up[0].script);
        // try {
        //   const versionArr = await MigrateRepositoryInstance.selectOnlyMigrateVersion(
        //     CONN,
        //     migrate.version
        //   );
        //   console.log("VERSION", versionArr);
        // } catch (err) {
        //   console.log("version created");
        // }

        console.log(migrate);
      }
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
