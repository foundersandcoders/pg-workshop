const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  errorHandler
} = require('./handlers');

const router = (request, response) => {
  const { url } = request;

  if (url === '/') {
    homeHandler(response);
  } else if (url === '/users') {
    getUsersHandler(response);
  } else if (url.includes('public')) {
    publicHandler(url, response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
