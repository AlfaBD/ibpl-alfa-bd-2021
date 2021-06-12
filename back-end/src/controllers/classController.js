const classService = require('../services/class');

module.exports = {
  async index(request, response) {
    const schools = await classService.getAllClasses();
    return response.json(schools);
  },
  async show(request, response) {
    const school = await classService.getClassById(request.params);
    return response.json(school);
  },
  async store(request, response) {
    const school = await classService.createClass(request.body);
    return response.json(school);
  },
  async update(request, response) {
    const sch_id = request.params.schoolId;
    const school = await classService.updateClass(sch_id, request.body);
    return response.json(school);
  },
  async delete(request, response) {
    const sch_id = request.params.schoolId;
    const result = await classService.deleteClass(sch_id);
    return response.json(Boolean(result));
  },
};
