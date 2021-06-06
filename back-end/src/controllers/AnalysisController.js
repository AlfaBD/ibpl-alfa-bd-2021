const formidable = require('formidable')
const form = new formidable.IncomingForm()
const { PythonShell } = require('python-shell')

module.exports = {
    async predict(request, response, fields, files) {
        const result = await function () {     
            
            let options = {file: files.path, path: fields.path, studentId: request.params.studentId};

            PythonShell.run('classifier.py', options, function (err, result) {
                if (err) throw err;
                return result;
            });          
        };
        return response.json(result);
    },

    async predict2(request, response) {
        const result = await form.parse(request, (err, fields, files) => {

            console.log(request);
            let options = {file: files.path, path: fields.path, studentId: request.params.studentId};

            return {};
        });        
        return response.json(result);
    },
};