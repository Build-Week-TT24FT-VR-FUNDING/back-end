var pg = require("pg");
pg.defaults.ssl = true;

const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,

  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/VRFund.db3" },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
