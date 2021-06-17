const router = require('express');
const classController = require('../../controllers/classController');
const route = router();
const tokenAuth = require("../middlewares/token-auth")

module.exports = (app) => {

  // Protecting with token auth
  app.use(tokenAuth());

  //All routes under this file will be prefixed with /analysis
  app.use('/analysis', route);

  //Process predicition student speech
  route.post('/predict/:studentId/:speech', (req, res, next) => {});

  //All routes under this file will be prefixed with /class
  app.use('/class', route);

  //Get all class information
  route.get('/', classController.index);

  //Get a specific class information
  route.get('/:classId', classController.show);

  //Create a new class
  route.post('/', classController.store);

  //Update a class information
  route.put('/:classId', classController.update);

  //Delete a specific class
  route.delete('/:classId', classController.delete);
};
