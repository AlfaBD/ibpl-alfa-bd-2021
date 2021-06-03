const Router = require('express');
const authenticate = require('./routes/authenticate')
const student = require('./routes/student');
const school = require('./routes/school');
const teacher = require('./routes/teacher');

// guaranteed to get dependencies
module.exports = () => {
  const app = Router();
  authenticate(app);
  student(app);
  school(app);
  teacher(app);

  return app;
};