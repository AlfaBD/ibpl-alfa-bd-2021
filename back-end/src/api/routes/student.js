const router = require('express');
const studentController = require('../../controllers/StudentController');
const route = router();

module.exports = (app) => {
  //All routes under this file will be prefixed with /student
  app.use('/student', route);

  //Get all student information
  route.get('/', studentController.index);

  //Get a specific student information
  route.get('/:studentId', studentController.show);

  //Create a new student
  route.post('/', studentController.store);

  //Update a student information
  route.put('/:studentId', studentController.update);

  //Delete a specific student
  route.delete('/:studentId', studentController.delete);
};
