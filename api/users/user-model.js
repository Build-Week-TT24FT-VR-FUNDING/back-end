const db = require("../../data/dbConfig");

async function create(user) {
  const [id] = await db("users").insert(user);
  return db("users").where("id", id);
}

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

  create,
};
