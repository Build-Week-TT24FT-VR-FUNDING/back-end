const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("users");
  },
  findBy(email) {
    return db("users").where("email", email);
  },

  async create(user) {
    const [id] = await db("users").insert(user);
    return db("users").where("id", id).first();
  },
};
