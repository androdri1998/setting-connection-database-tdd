import request from "supertest";
import App from "../App";

describe("Inserts", () => {
  beforeEach(async () => {});

  it("Should be to do request", async () => {
    const AppInstace = new App();
    const response = await request(AppInstace.express).post("/main");

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("created");
    expect(response.body.created).toBe(true);
  });
});
