const router = require('express');
const route = router();
const TeacherController = require('../../controllers/TeacherController');

module.exports = (app) => {
  //All routes under this file will be prefixed with /teacher
  app.use('/teacher', route);

  //Get all teacher information
  route.get('/', TeacherController.index);

  //Get a specific teacher information
  route.get('/:teacherId', TeacherController.show);

  //Create a new teacher
  route.post('/', TeacherController.store);

  //Update a teacher information
  route.put('/:teacherId', TeacherController.update);

  //Delete a specific teacher
  route.delete('/:teacherId', TeacherController.delete);
};
