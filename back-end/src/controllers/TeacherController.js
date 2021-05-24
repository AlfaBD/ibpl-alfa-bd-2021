const Teacher = require('../models/teacher');

module.exports = {
  async index(request, response) {
    const teacher = await Teacher;
    return response.json(teacher);
  },
  async show(request, response) {
    const teacher = await Teacher.findAll({
      where: { usr_id: request.params.teacherId },
    });
    return response.json(teacher);
  },
  async store(request, response) {
    const teacher = await Teacher.create(request.body);
    return res.json(teacher);
  },
  async update(request, response) {
    const usr_id = req.params.teacherId;
    await Teacher.update(request.body, { where: { usr_id } });
    return res.json(request.body);
  },
  async delete(request, response) {
    await Teacher.destroy({ where: { usr_id: req.params.teacherId } });
  },
};
