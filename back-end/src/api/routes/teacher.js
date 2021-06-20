const router = require('express');
const route = router();
const teacherController = require('../../controllers/teacherController');
const tokenAuth = require('../middlewares/token-auth');

module.exports = (app) => {
  // Protecting with token auth
  app.use(tokenAuth());

  //All routes under this file will be prefixed with /teacher
  app.use('/teacher', route);

  //Get all teacher information
  route.get('/', teacherController.index);

  //Get a specific teacher information
  route.get('/:teacherId', teacherController.show);

  //Create a new teacher
  route.post('/', teacherController.store);

  //Update a teacher information
  route.put('/:teacherId', teacherController.update);

  //Delete a specific teacher
  route.delete('/:teacherId', teacherController.delete);
};
