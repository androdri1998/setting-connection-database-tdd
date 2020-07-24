import DatabaseRepository from "../../repositories/DatabaseRepository";

export default async (tables: string[] = []): Promise<boolean> => {
  const DatabaseRepositoryInstance = new DatabaseRepository();
  await DatabaseRepositoryInstance.executeWithDatabase(async (CONN) => {
    await Promise.all(
      tables.map(async (table) => {
        const response = await DatabaseRepositoryInstance.truncate(CONN, table);
        return response;
      })
    );
    return true;
  });
  return true;
};
