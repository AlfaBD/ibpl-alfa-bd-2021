const Router = require('express');
const authenticate = require('./routes/authenticate');
const admin = require('./routes/admin');
const student = require('./routes/student');
const school = require('./routes/school');
const teacher = require('./routes/teacher');
const analysis = require('./routes/analysis');
const clazz = require('./routes/class');

// guaranteed to get dependencies
module.exports = () => {
  const app = Router();

  authenticate(app);
  admin(app);
  student(app);
  school(app);
  teacher(app);
  clazz(app);
  analysis(app);

  return app;
};
