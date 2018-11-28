const dbConnection = require('../database/db_connection.js');

const getData = cb => {
  dbConnection.query('SELECT * FROM users', (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

module.exports = getData;
