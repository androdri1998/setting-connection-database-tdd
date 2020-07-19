import Database from "../database/Database";
import processConsts from "../utils/process-consts";
import { stages } from "../utils/configs";

/* eslint-disable @typescript-eslint/no-explicit-any */
class DatabaseRepositorie {
  public async query(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    script: string,
    values: any[] = []
  ): Promise<any[]> {
    let response;
    if (processConsts.stage === stages.TEST) {
      // const sqlFormated = await CONN.prepare(script);
      response = await CONN.all(script, values);
    } else if (processConsts.stage === (stages.DEV || stages.PROD)) {
      const sqlFormated = await CONN.format(script, values);
      response = await CONN.query(sqlFormated);
    }
    return response;
  }

  public async create(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    CONN: any,
    script: string
  ): Promise<any[]> {
    let response;
    if (processConsts.stage === stages.TEST) {
      response = await CONN.run(script);
    } else if (processConsts.stage === (stages.DEV || stages.PROD)) {
      const sqlFormated = await CONN.format(script);
      response = await CONN.query(sqlFormated);
    }
    return response;
  }

  public async executeWithDatabase(func: (CONN: any) => any): Promise<any> {
    const DatabaseInstance = new Database();
    const connection = await DatabaseInstance.getConnection();

    await func(connection);

    if (processConsts.stage === stages.TEST) {
      await connection.close();
    } else if (processConsts.stage === (stages.DEV || stages.PROD)) {
      await connection.end();
    }
  }
}

export default DatabaseRepositorie;
