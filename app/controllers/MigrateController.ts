import { EMigrates } from "./MigrateController-types";

class MigrateController {
  private async executeMigration(type: EMigrates, executeAll: boolean) {
    return executeAll;
  }

  public async upMigrate() {
    this.executeMigration(EMigrates.UP, false);
  }

  public async upAllMigrations() {
    this.executeMigration(EMigrates.UP, true);
  }

  public async downMigrate() {
    this.executeMigration(EMigrates.DOWN, false);
  }

  public async downAllMigrate() {
    this.executeMigration(EMigrates.DOWN, true);
  }
}

export default MigrateController;
