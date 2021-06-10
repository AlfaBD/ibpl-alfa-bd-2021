const router = require('express');
const schoolController = require('../../controllers/schoolController');
const route = router();

module.exports = (app) => {
  //All routes under this file will be prefixed with /analysis
  app.use('/analysis', route);

  //Process predicition student speech
  route.post('/predict/:studentId/:speech', (req, res, next) => {});

  // We will keep the token authentication disabled for now
  //app.use(tokenAuth());

  //All routes under this file will be prefixed with /school
  app.use('/school', route);

  //Get all school information
  route.get('/', schoolController.index);

  //Get a specific school information
  route.get('/:schoolId', schoolController.show);

  //Create a new school
  route.post('/', schoolController.store);
  //   route.post('/', async (req, res, next) => {
  //     const schoolData = req.body.schoolData;
  //     const createdSchool = await schoolService.createSchool({ schoolData });
  //     res.status(200).json(createdSchool);
  //   });

  //Update a school information
  route.put('/:schoolId', schoolController.update);

  //Delete a specific school
  route.delete('/:schoolId', schoolController.delete);
};
