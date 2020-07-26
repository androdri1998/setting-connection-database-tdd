import request from "supertest";
import faker from "faker";

import App from "../App";
import truncate from "./utils/truncate";

describe("Jobs", () => {
  beforeEach(async () => {
    await truncate(["jobs"]);
  });

  it("Should be to create a job", async () => {
    const AppInstace = new App();
    const response = await request(AppInstace.express)
      .post("/main")
      .send({ name: faker.name.jobTitle() });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("created");
    expect(response.body.created).toBe(true);
  });

  it("Should be return a error 400 to create a job", async () => {
    const AppInstace = new App();
    const response = await request(AppInstace.express).post("/main");

    expect(response.status).toBe(400);
  });
});
