const db_connection = require('../../database/db_connection');

const postData = (name, location, cb) => {
  db_connection.query('INSERT INTO users (name, location) VALUES ($1, $2)', [name, location], (err, res) => {
    if (err) {
      return cb(err);
    }
    else {
    cb(null, res);
  }
  })
}
