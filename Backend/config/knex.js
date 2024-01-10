const knex = require("knex")({
  client: "pg",
  connection: {
    host: "ep-damp-sky-85403796.us-east-2.aws.neon.tech",
    user: "nacholopez18",
    port: 5432,
    password: "QN21AYuBKenv",
    database: "NotesProject",
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
    },
  },
});

module.exports = knex;
