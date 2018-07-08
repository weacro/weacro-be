require('dotenv').config();

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT } = process.env;

const pgp = require('pg-promise')({
  query: e => console.log(e.query),
});

function setDatabase() {
  return pgp({
    database: DATABASE_NAME,
    port: DATABASE_PORT,
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
  });
}

const db = setDatabase();

module.exports = db;
