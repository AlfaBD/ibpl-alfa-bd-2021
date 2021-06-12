const formidable = require('formidable');
const form = new formidable.IncomingForm();
const { PythonShell } = require('python-shell');
const FluencyMetrics = require('../models/FluencyMetrics');

PythonShell.defaultOptions = {
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: './src/controllers/scripts',
};

const pyshell = new PythonShell('classifier.py');

module.exports = {
  predict(request, response, fields, files) {
    pyshell.send(files.file.path);

    pyshell.on('message', function (result) {
      //Todo: persistir os dados no banco

      const result = await FluencyMetrics.create({
        idProfessor: '',
        idAluno: '',
        nota: '',
      });
      return response.json({ status: 'OK', result: result });
    });

    pyshell.end(function (err, code, signal) {
      if (err)
        return response.json({ status: 'ERROR', message: err, result: null });
    });
  },
};
