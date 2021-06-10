const router = require('express');
const userService = require('../../services/user');
const route = router();

module.exports = (app) => {
  //All routes under this file will be prefixed with /student
  app.use('/student', route);

  //Get all student information
  route.get('/', async (req, res, next) => {
    const students = await userService.getAllStudents();
    res.status(200).json(students);
  });

  //Get a specific student information
  route.get('/:studentId', async (req, res, next) => {
    const student = await userService.getStudentById({
      studentId: req.params.studentId,
    });
    res.status(200).json(student);
  });

  //Create a new student
  route.post('/', async (req, res, next) => {
    let userData = req.body.userData;
    userData.role = 'STUDENT';
    const createdUser = await userService.createUser({ userData });
    res.status(200).json(createdUser);
  });

  //Update a student information
  route.put('/:studentId', (req, res, next) => {});

  //Delete a specific student
  route.delete('/:studentId', (req, res, next) => {});
};
