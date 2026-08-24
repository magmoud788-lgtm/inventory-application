const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

module.exports = pool;