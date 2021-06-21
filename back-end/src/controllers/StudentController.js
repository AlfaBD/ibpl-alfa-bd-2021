const userService = require("../services/user")
const fs = require('fs')

module.exports = {
  async index(request, response) {
    const schools = await userService.getUsersByRole("STUDENT")
    return response.json(schools)
  },
  async show(request, response) {
    const userId = request.params.studentId
    const school = await userService.getUserById(userId, "STUDENT")
    return response.json(school)
  },
  async store(request, response) {
    request.body.role = "STUDENT"
    const school = await userService.createUser(request.body)
    return response.json(school)
  },
  async update(request, response) {
    const userId = request.params.adminId
    request.body.role = "STUDENT"
    const school = await userService.updateUser(userId, request.body)
    return response.json(school)
  },
  async delete(request, response) {
    const userId = request.params.adminId
    const result = await userService.deleteUser(userId, "STUDENT")
    return response.json(Boolean(result))
  },
  async uploadAudio(request, response) {
    const userId = request.params.studentId;
    const taskId = request.body.taskId;
    const audioEncodedFile = request.body.file
    try {
      fs.writeFileSync(`./src/audios/audio-${userId}-${taskId}.ogg`, Buffer.from(audioEncodedFile.replace('data:audio/webm;codecs=opus;base64,', ''), 'base64'));
      //TODO: store the proper relations in DB here!
      response.status(200).json({message: "Success"});
    } catch (err) {
      console.log(err)
      response.status(500).json(err)
    }
    
  }
}
