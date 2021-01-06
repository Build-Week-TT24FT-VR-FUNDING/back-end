const knex = require("knex");
const knexConfig = require("../knexfile");
const environment = process.env.DATABASE_URL || "development";

module.exports = knex(knexConfig[environment]);
