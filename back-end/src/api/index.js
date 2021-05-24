const Router = require('express');
const student = require('./routes/student');
const school = require('./routes/school');
const teacher = require('./routes/teacher');
const clazz = require('./routes/class');

// guaranteed to get dependencies
module.exports = () => {
  const app = Router();

  student(app);
  school(app);
  teacher(app);
  clazz(app);

  return app;
};
