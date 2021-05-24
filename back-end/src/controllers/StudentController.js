const Student = require('../models/student');

module.exports = {
  async index(request, response) {
    const student = await Student;
    return response.json(student);
  },
  async show(request, response) {
    const student = await School.findAll({
      where: { usr_id: request.params.studentId },
    });
    return response.json(student);
  },
  async store(request, response) {
    const student = await Student.create(request.body);
    return res.json(student);
  },
  async update(request, response) {
    const usr_id = req.params.studentId;
    await Student.update(request.body, { where: { usr_id } });
    return res.json(request.body);
  },
  async delete(request, response) {
    await Student.destroy({ where: { usr_id: req.params.studentId } });
  },
};
