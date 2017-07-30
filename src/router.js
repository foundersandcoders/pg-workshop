const http = require('http');
const users = require('./static.js');
const fs = require('fs');
const pg = require('pg');

const router = (request, response) => {
  const endpoint = request.url.split('/')[1];

  if (endpoint === '') {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if(error) {
        console.log(error);
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
        return;
      } else {
        response.end(file);
      }
    });
  } else if (endpoint === "users") {
    // Replace the 3 lines below below with your own function that gets data from your database
    const output = JSON.stringify(users);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(output);
  } else {
    const fileName = request.url;
    const fileType = request.url.split(".")[1];
    response.writeHead(200, {"Content-Type": "text/" + fileType});
    fs.readFile(__dirname + "/../public" + fileName, function(error, file) {
      if(error) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem loading this</h1>');
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  }
};

module.exports = router;
