const dbConnection = require('../database/db_connection.js');

const postData = (name, location, cb) => {
  dbConnection.query(
    'INSERT INTO users (name, location) VALUES ($1, $2)',
    [name, location],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
