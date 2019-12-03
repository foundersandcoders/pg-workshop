// Add code below to query your database
const dbConnection = require("../database/db_connection");

// unsafe
/* const putData = (user, cb) => {
  dbConnection.query(`INSERT INTO users (name,location) VALUES ('${user.name}','${user.location}')`, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
}; */

// safer
const putData = (user, cb) => {
  dbConnection.query(
    `INSERT INTO users (name,location) VALUES ($1,$2)`,
    [user.name, user.location],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = putData;

// SCRIPT INJECTIONS for name field (only work on unsafe version)
// hacker','nowhere'); DELETE FROM users WHERE name='Dan'; --
// hacker','nowhere'); DROP TABLE users CASCADE; --
