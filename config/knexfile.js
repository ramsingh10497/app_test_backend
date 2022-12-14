// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "ecom_product",
      user: "postgres",
      password: "12345",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
