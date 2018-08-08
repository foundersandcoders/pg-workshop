const { readFile } = require('fs');
const path = require('path');

const users = require('./static');

const serverError = (err, response) => {
  response.writeHead(500, 'Content-Type:text/html');
  response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  readFile(filepath, (err, file) => {
    if (err) serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(file);
  });
};

const getUsersHandler = response => {
  // Replace the 3 lines below below with your own function that gets data from your database
  const output = JSON.stringify(users);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(output);
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, '..', url);
  readFile(filepath, (err, file) => {
    if (err) serverError(err, response);
    const [, extension] = url.split('.');
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon'
    };
    response.writeHead(200, { 'content-type': extensionType[extension] });
    response.end(file);
  });
};

const errorHandler = response => {
  response.writeHead(404, { 'content-type': 'text/html' });
  response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
  homeHandler,
  getUsersHandler,
  publicHandler,
  errorHandler
};
