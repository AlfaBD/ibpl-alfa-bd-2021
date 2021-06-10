const userService = require('../services/user');

module.exports = {
  async index(request, response) {
    const students = await userService.getUsersByRole('STUDENT');
    return response.json(students);
  },
  async show(request, response) {
    const student = await userService.getUserById(request.params);
    return response.json(student);
  },
  async store(request, response) {
    const student = await userService.createUser(request.body);
    return response.json(student);
  },
  async update(request, response) {
    const { usr_id } = request.params;
    const student = await userService.updateUser(usr_id, request.body);
    return response.json(student);
  },
  async delete(request, response) {
    const { usr_id } = request.params;
    const result = await userService.deleteSchool(usr_id);
    return response.json(Boolean(result));
  },
};
