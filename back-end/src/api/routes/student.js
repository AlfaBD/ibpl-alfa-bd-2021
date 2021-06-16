const router = require("express")
const studentService = require("../../services/student")
const userService = require("../../services/user")
const route = router()
const tokenAuth = require("../middlewares/token-auth")

module.exports = (app) => {
  // Middleware - token authentication
  app.use(tokenAuth())

  //All routes under this file will be prefixed with /student
  app.use("/student", route)

  //Get all student information
  route.get("/", async (req, res, next) => {
    const students = await studentService.getAllStudents()
    res.status(200).json(students)
  })

  //Get a specific student information
  route.get("/:studentId", async (req, res, next) => {
    const student = await studentService.getStudentById({
      studentId: req.params.studentId,
    })
    res.status(200).json(student)
  })

  //Create a new student
  route.post("/", async (req, res, next) => {
    const role = "STUDENT"
    const userData = req.body.userData
    const createdUser = await userService.createUser({ role, userData })
    res.status(200).json(createdUser)
  })

  //Update a student information
  route.put("/:studentId", (req, res, next) => {})

  //Delete a specific student
  route.delete("/:studentId", (req, res, next) => {})
}
