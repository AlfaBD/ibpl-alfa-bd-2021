const schoolService = require('../services/school');

module.exports = {
  async index(request, response) {
    const { query } = request;
    const schools = await schoolService.getAllSchools(query);
    return response.json(schools);
  },
  async show(request, response) {
    const school = await schoolService.getSchoolById(request.params);
    return response.json(school);
  },
  async store(request, response) {
    const school = await schoolService.createSchool(request.body);
    return response.json(school);
  },
  async update(request, response) {
    const sch_id = request.params.schoolId;
    const school = await schoolService.updateSchool(sch_id, request.body);
    return response.json(school);
  },
  async delete(request, response) {
    const sch_id = request.params.schoolId;
    const result = await schoolService.deleteSchool(sch_id);
    return response.json(Boolean(result));
  },
};
