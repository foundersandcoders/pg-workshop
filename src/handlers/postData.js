const db_connection = require('../../database/db_connection');

const postData = (userDetails, cb) => {
  db_connection.query('INSERT INTO users (name, location) VALUES ($1, $2)', [userDetails.name, userDetails.location], (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res);
  })
}
