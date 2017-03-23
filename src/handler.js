const http = require('http');
const users = require('./static.js');
const fs = require('fs');

const handler = (request, response) => {
  let endpoint = request.url.split('/')[1];

  if (endpoint === '') {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if(error) {
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  } else if (endpoint === "users") {
    // your handler here =>> get data from the database and show on page load
    const output = JSON.stringify(users);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(output);
  } else {
    var fileName = request.url;
    var fileType = request.url.split(".")[1];
    response.writeHead(200, {"Content-Type": "text/" + fileType});
    fs.readFile(__dirname + "/../public" + fileName, function(error, file) {
      if(error) {
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  }
};

module.exports = handler;
