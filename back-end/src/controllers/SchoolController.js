const School = require('../models/school');

module.exports = {
  async index(request, response) {
    const schools = await School.findAll();
    return response.json(schools);
  },
  async show(request, response) {
    const school = await School.findAll({
      where: { sch_id: request.params.schoolId },
    });
    return response.json(school);
  },
  async store(request, response) {
    const school = await School.create(request.body);
    return res.json(school);
  },
  async update(request, response) {
    const sch_id = req.params.schoolId;
    await School.update(request.body, { where: { sch_id } });
    return res.json(request.body);
  },
  async delete(request, response) {
    await School.destroy({ where: { sch_id: req.params.schoolId } });
  },
};
