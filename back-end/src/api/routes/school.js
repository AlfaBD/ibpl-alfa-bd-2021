const router = require('express');
const route = router();
const SchoolController = require('../../controllers/SchoolController');

module.exports = (app) => {
  //All routes under this file will be prefixed with /school
  app.use('/school', route);

  //Get all school information
  route.get('/', SchoolController.index);
    //All routes under this file will be prefixed with /analysis
    app.use('/analysis', route);

    //Process predicition student speech
    route.post( '/predict/:studentId/:speech', (req, res, next) => {});

    // We will keep the token authentication disabled for now
    //app.use(tokenAuth());

    //All routes under this file will be prefixed with /school
    app.use('/school', route);

  //Get a specific school information
  route.get('/:schoolId', SchoolController.show);

  //Create a new school
  route.post('/', SchoolController.store);

  //Update a school information
  route.put('/:schoolId', SchoolController.update);

  //Delete a specific school
  route.delete('/:schoolId', SchoolController.delete);
};
