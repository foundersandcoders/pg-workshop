const http = require('http');
const handler = require('./handler.js');

const server = http.createServer(handler);
const port = process.env.PORT || 5000;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Magic happens on port ${port}`);
  });
}

startServer();
