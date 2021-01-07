const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

describe("Sanity check", () => {
  it("works", () => {
    expect(2 + 2).toBe(4);
  });
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});
beforeEach(async () => {
  await db("users").truncate();
});
afterAll(async () => {
  await db.destroy();
});

const invalidUser = { first_name: "RickJames" };
const validUser = {
  first_name: "Rick",
  last_name: "James",
  email: "rjz@vrfundtest.com",
  password: "password",
  role: 1,
};
const rJames = { email: "rj@vrfund.com", password: "password" };

describe("Authentication Endpoints", () => {
  describe("[POST] REGISTER", () => {
    it("/signup responds with 201 if username and password are valid", async () => {
      const response = await request(server)
        .post("/account/signup")
        .send(validUser);
      expect(response.status).toBe(201);
    });
    it("/register responds with 401 if missing fields", async () => {
      const response = await request(server)
        .post("/account/signup")
        .send(invalidUser);
      expect(JSON.stringify(response.body)).toMatch(
        /username and password required/
      );
    });
  });
  describe("[POST] LOGIN", () => {
    it("/login responds with token if user is registerd", async () => {
      const signup = await request(server)
        .post("/account/signup")
        .send(validUser);
      const res = await request(server).post("/account/login").send(rJames);
      expect(res.body.token);
    });
    it("/login responds with 'invalid credentials' if not registered", async () => {
      const res = await request(server).post("/account/login").send(rJames);
      expect(JSON.stringify(res.body)).toMatch(
        /Invalid credentials, please try again./
      );
    });
  });
});
