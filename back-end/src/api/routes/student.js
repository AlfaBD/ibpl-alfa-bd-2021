const router = require('express');
const route = router();
const StudentController = require('../../controllers/StudentController');

module.exports = (app) => {
  //All routes under this file will be prefixed with /student
  app.use('/student', route);

  //Get all student information
  route.get('/', StudentController.index);

  //Get a specific student information
  route.get('/:studentId', StudentController.show);

  //Create a new student
  route.post('/', StudentController.store);

  //Update a student information
  route.put('/:studentId', StudentController.update);

  //Delete a specific student
  route.delete('/:studentId', StudentController.delete);
};
