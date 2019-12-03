const fs = require("fs");
const dbConnection = require("./db_connection"); // import our new Pool object

const sql = fs.readFileSync(`${__dirname}/build_db.sql`).toString();
// why sync? NEED this returned before we can proceed with anything else

// sql is now a string containing our entire db_build.sql script
// query is a method on Pool which runs our psql commands at the defined remote
// if it is actually a query rather than a build instruction, we handle the response in the callback
dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log("users table created with results ", res);
});
