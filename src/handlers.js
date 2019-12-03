const { readFile } = require("fs");
const path = require("path");
const querystring = require("querystring");

const users = require("./static");
const getData = require("./queries/getData");
const putData = require("./queries/putData");

const serverError = (err, response) => {
  response.writeHead(500, "Content-Type:text/html");
  response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, "..", "public", "index.html");
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const getUsersHandler = response => {
  // Replace the 3 lines below below with your own function that gets data from your database
  getData((err, res) => {
    if (err) return console.log(err);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(res));
  });
  // const output = JSON.stringify(users);
  // response.writeHead(200, { 'Content-Type': 'application/json' });
  // response.end(output);
};

const putUserHandler = (request, response) => {
  let data = "";
  let user = {};
  request.on("data", chunk => {
    data += chunk;
  });
  request.on("error", err => {
    throw err;
  });
  request.on("end", () => {
    console.log(data);
    let user = querystring.parse(data);
    putData(user, (err, res) => {
      if (err) throw err;
      console.log("Insertion response: ", res);
    });
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, "..", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split(".");
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    response.writeHead(200, { "content-type": extensionType[extension] });
    response.end(file);
  });
};

const errorHandler = response => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Page Requested Cannot be Found</h1>");
};

module.exports = {
  homeHandler,
  getUsersHandler,
  putUserHandler,
  publicHandler,
  errorHandler
};
