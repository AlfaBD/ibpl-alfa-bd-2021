const router = require('express');
const schoolService = require('../../services/school');
const route = router();

module.exports = (app) => {
  //All routes under this file will be prefixed with /student
  app.use('/school', route);

  //Get all student information
  route.get('/', (req, res, next) => {});

  //Get a specific student information
  route.get('/:schoolId', (req, res, next) => {});

  //Create a new school
  route.post('/', async (req, res, next) => {
    const schoolData = req.body.schoolData;
    const createdSchool = await schoolService.createSchool({ schoolData });
    res.status(200).json(createdSchool);
  });

  //Update a student information
  route.put('/:schoolId', (req, res, next) => {});

  //Delete a specific student
  route.delete('/:schoolId', (req, res, next) => {});
};
