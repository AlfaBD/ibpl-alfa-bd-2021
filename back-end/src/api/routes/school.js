const router = require('express');
const route = router();
const SchoolController = require('../../controllers/SchoolController');

module.exports = (app) => {
  //All routes under this file will be prefixed with /school
  app.use('/school', route);

  //Get all school information
  route.get('/', SchoolController.index);

  //Get a specific school information
  route.get('/:schoolId', SchoolController.show);

  //Create a new school
  route.post('/', SchoolController.store);

  //Update a school information
  route.put('/:schoolId', SchoolController.update);

  //Delete a specific school
  route.delete('/:schoolId', SchoolController.delete);
};
