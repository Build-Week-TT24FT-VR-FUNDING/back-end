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
    ...sharedConfig,
    connection: { filename: "./data/VRFund.db3" },
  },
};
