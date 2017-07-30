const http = require('http');
const users = require('./static.js');
const fs = require('fs');
const pg = require('pg');
const getData = require('./queries/getData.js');
const postData = require('./queries/postData.js');

const router = (request, response) => {
  const endpoint = request.url.split('/')[1];

  if (endpoint === '') {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if(error) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  } else if (endpoint === "users") {
    // TASK 1: replace the 3 lines below below with your own function that gets data from your database
    getData((err, res) => {
        if (err) {
          response.writeHead(500, 'Content-Type:text/html');
          response.end('<h1>Sorry, there was a problem getting the users</h1>');
          console.log(error);
        };
        let output = JSON.stringify(res);
        response.writeHead(200,{
          'content-type': 'application/json'
        });
    response.end(output);
  });
} else if (endpoint === "create-user") {
  let data = '';
    request.on('data', function(chunk) {
      data+=chunk;
    });
    request.on('end', () => {
      const name = queryString.parse(data).name;
      const location = queryString.parse(data).location;

      postData(name, location, (err, res) => {
        if (err) {
          response.writeHead(500, 'Content-Type:text/html');
          response.end('<h1>Sorry, there was a problem adding that user</h1>');
          console.log(err)};
      });

    });
  } else {
    const fileName = request.url;
    const fileType = request.url.split(".")[1];
    response.writeHead(200, {"Content-Type": "text/" + fileType});
    fs.readFile(__dirname + "/../public" + fileName, function(error, file) {
      if(error) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem loading this page</h1>');
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  }
};

module.exports = router;
