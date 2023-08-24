const express = require("express");
const fetch = require("node-fetch");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "demodb",
  password: "root",
  port: 5432,
});

const createDatabase = async () => {
  try {
    const tableExistsQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = 'data'
      );
    `;

    const { rows } = await pool.query(tableExistsQuery);
    const tableExists = rows[0].exists;
    if (!tableExists) {
      const response = await fetch("https://api.wazirx.com/api/v2/tickers");
      const data = await response.json();

      const top10 = Object.values(data).slice(0, 10); // Get top 10 results

      await pool.query(`
      CREATE TABLE IF NOT EXISTS "data" (
        id SERIAL PRIMARY KEY,
        name TEXT,
        last NUMERIC,
        buy NUMERIC,
        sell NUMERIC,
        volume NUMERIC,
        base_unit TEXT
      );`);
      for (const item of top10) {
        const { name, last, buy, sell, volume, base_unit } = item;
        // Insert data into the database
        await pool.query(
          "INSERT INTO data (name, last, buy, sell, volume, base_unit) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING;",
          [name, last, buy, sell, volume, base_unit]
        );
      }
      console.log("Data fetched and stored successfully.");
    } else {
      console.log("Table already exists. No data fetched.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
createDatabase();

app.listen(4000, () => {
  console.log(`Server is running on port http://localhost:4000`);
});

app.get("/get-data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM  data");
    res.json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
});
module.exports = app;
