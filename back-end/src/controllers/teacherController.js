const teacherService = require('../services/user');

module.exports = {
  async index(request, response) {
    const teachers = await teacherService.geUserByRole('TEACHER');
    return response.json(teachers);
  },
  async show(request, response) {
    const teacher = await teacherService.getUserById();
    return response.json(teacher);
  },
  async store(request, response) {
    const teacher = await teacherService.createUser(request.body);
    return response.json(teacher);
  },
  async update(request, response) {
    const usr_id = request.params.userId;
    const teacher = await teacherService.updateUser(usr_id, request.body);
    return response.json(teacher);
  },
  async delete(request, response) {
    const usr_id = request.params.userId;
    const result = await teacherService.deleteUser(usr_id);
    return response.json(Boolean(result));
  },
};
