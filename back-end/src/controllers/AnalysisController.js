const formidable = require('formidable');
const form = new formidable.IncomingForm();
const { PythonShell } = require('python-shell');
const FluencyMetrics = require('../schemas/FluencyMetrics');

PythonShell.defaultOptions = {
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: './src/controllers/scripts',
};

const pyshell = new PythonShell('classifier.py');

module.exports = {
  predict(request, response, fields, files) {
    const { teacherId, studentId } = request.params;
    pyshell.send(files.file.path);

    pyshell.on('message', async (result) => {
      const fluencyMetric = await FluencyMetrics.create({
        idProfessor: teacherId,
        idAluno: studentId,
        metrica: result,
      });
      return response.json({ status: 'OK', result: fluencyMetric });
    });

    pyshell.end(function (err, code, signal) {
      if (err)
        return response.json({ status: 'ERROR', message: err, result: null });
    });
  },
};
