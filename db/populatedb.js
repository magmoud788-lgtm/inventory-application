require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL, 
  description TEXT
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER NOT NULL,
  category_id INTEGER NOT NULL
REFERENCES categories(id)
ON DELETE CASCADE
);
`;

async function main() {
  console.log('seeding');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
});
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();