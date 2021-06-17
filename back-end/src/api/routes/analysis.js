const router = require('express');
const formidable = require('formidable');
const form = new formidable.IncomingForm();
const route = router();
const AnalysisController = require('../../controllers/AnalysisController');

module.exports = (app) => {
  //All routes under this file will be prefixed with /analysis
  app.use('/analysis', route);

  //Process predicition student speech
  route.post('/:teacherId/:studentId/', (req, res, next) =>
    form.parse(req, (err, fields, files) =>
      AnalysisController.predict(req, res, fields, files)
    )
  );
};
