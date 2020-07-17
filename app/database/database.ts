import mysql from "promise-mysql";
import sqlite3 from "sqlite3";

import processConsts from "../utils/process-consts";
import { stages } from "../utils/configs";

class Database {
  private host: string | undefined;
  private user: string | undefined;
  private password: string | undefined;
  private database: string | undefined;
  private port: number | undefined;

  constructor() {
    this.host = processConsts.dbHost;
    this.user = processConsts.dbUser;
    this.password = processConsts.dbPass;
    this.database = processConsts.dbName;
    this.port = Number(processConsts.dbPort);
  }

  public async getConnection(): Promise<any> {
    if (processConsts.stage === stages.TEST) {
      const sqlite3Database = sqlite3.verbose();
      const dbConnection = new sqlite3Database.Database(
        "./app/database/database.sqlite"
      );

      return dbConnection;
    } else if (
      processConsts.stage === stages.DEV ||
      processConsts.stage === stages.PROD
    ) {
      const connection = mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database,
        port: this.port,
      });

      return connection;
    } else {
      return null;
    }
  }
}

export default Database;
