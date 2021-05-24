const router = require('express');
const route = router();
const ClassController = require('../../controllers/ClassController');

module.exports = (app) => {
  //All routes under this file will be prefixed with /school
  app.use('/class', route);

  //Get all school information
  route.get('/', ClassController.index);

  //Get a specific school information
  route.get('/:classId', ClassController.show);

  //Create a new school
  route.post('/', ClassController.store);

  //Update a school information
  route.put('/:classId', ClassController.update);

  //Delete a specific school
  route.delete('/:classId', ClassController.delete);
};
