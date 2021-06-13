const userService = require('../services/user');

module.exports = {
  async index(request, response) {
    const schools = await userService.getUsersByRole('TEACHER');
    return response.json(schools);
  },
  async show(request, response) {
    const userId = request.params.adminId;
    const school = await userService.getUserById(userId, 'TEACHER');
    return response.json(school);
  },
  async store(request, response) {
    request.body.role = 'TEACHER';
    const school = await userService.createUser(request.body);
    return response.json(school);
  },
  async update(request, response) {
    const userId = request.params.adminId;
    request.body.role = 'TEACHER';
    const school = await userService.updateUser(userId, request.body);
    return response.json(school);
  },
  async delete(request, response) {
    const userId = request.params.adminId;
    const result = await userService.deleteUser(userId, 'TEACHER');
    return response.json(Boolean(result));
  },
};
