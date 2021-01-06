const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("users");
  },
  findBy(email) {
    return db("users").where("email", email);
  },
  findByID(id) {
    return db("users").where("id", id);
  },

  async create(user) {
    try {
      const [id] = await db("users").insert(user);
      return db("users").where("id", id);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
