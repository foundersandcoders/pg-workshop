// Add code below to query your database
const dbConnection = require("../database/db_connection");

const putData = (user, cb) => {
  dbConnection.query(
    `INSERT INTO users (name,location) VALUES ('${user.name}','${user.location}')`,
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = putData;
