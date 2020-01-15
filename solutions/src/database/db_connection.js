const { Pool } = require("pg");
const { URL } = require("url");
require("env2")("./config.env");

if (!process.env.DB_URL)
  throw new Error("Enviroment variable DB_URL must be set");

const url = new URL(process.env.DB_URL);

const options = {
  host: url.hostname,
  port: url.port,
  database: url.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: url.username,
  password: url.password,
  ssl: url.hostname !== "localhost"
};

module.exports = new Pool(options);
