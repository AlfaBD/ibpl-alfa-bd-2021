const Class = require('../models/class');

module.exports = {
  async index(request, response) {
    const clazz = await Class.findAll();
    return response.json(clazz);
  },
  async show(request, response) {
    const clazz = await Class.findAll({
      where: { cla_id: request.params.classId },
    });
    return response.json(clazz);
  },
  async store(request, response) {
    const clazz = await Class.create(request.body);
    return response.json(clazz);
  },
  async update(request, response) {
    const cla_id = request.params.classId;
    await Class.update(request.body, { where: { cla_id } });
    return response.json(request.body);
  },
  async delete(request, response) {
    await Class.destroy({ where: { cla_id: request.params.classId } });
  },
};
