import mysql from "promise-mysql";
import sqlite3 from "sqlite3";

import processConsts from "../utils/process-consts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getConnection = async (): Promise<any> => {
  if (processConsts.stage === "test") {
    const sqlite3Database = sqlite3.verbose();
    const dbConnection = new sqlite3Database.Database(
      "./app/database/database.sqlite"
    );

    return dbConnection;
  } else if (processConsts.stage === "dev" || processConsts.stage === "prod") {
    const connection = mysql.createConnection({
      host: processConsts.dbHost,
      user: processConsts.dbUser,
      password: processConsts.dbPass,
      database: processConsts.dbName,
      port: Number(processConsts.dbPort),
    });

    return connection;
  } else {
    return null;
  }
};

export default getConnection;
