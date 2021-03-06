const router = require('express');
const route = router();
const authenticationController = require('../../controllers/AuthenticationController');

module.exports = (app) => {
  app.use('/authenticate', route);

  // Authenticate route
  route.post('/', authenticationController.auth);

  //Get a specific user information
  route.get('/:userId', authenticationController.show);
};
