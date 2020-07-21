import Database from "../database/Database";
import selectsSqls from "../sqls/selects";

/* eslint-disable @typescript-eslint/no-explicit-any */
class DatabaseRepositorie {
  public async query(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    script: string,
    values: any[] = []
  ): Promise<any[]> {
    const sqlFormated = await CONN.format(script, values);
    const response = await CONN.query(sqlFormated);
    return response;
  }

  public async create(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    script: string
  ): Promise<any[]> {
    const response = await this.query(CONN, script);
    return response;
  }

  public async queryTableDatabase(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    tableName: string
  ): Promise<any[]> {
    const response = await this.query(CONN, selectsSqls.SELECT_TABLE_MYSQL, [
      tableName,
    ]);

    return response;
  }

  public async executeWithDatabase(func: (CONN: any) => any): Promise<any> {
    const DatabaseInstance = new Database();
    const connection = await DatabaseInstance.getConnection();

    await func(connection);

    await connection.end();
  }
}

export default DatabaseRepositorie;
