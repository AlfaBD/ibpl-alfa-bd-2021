const router = require("express")
const route = router()
const userService = require("../../services/user")
const tokenAuth = require("../middlewares/token-auth")

module.exports = (app) => {
  // Middleware - token authentication
  app.use(tokenAuth())

  //All routes under this file will be prefixed with /teacher
  app.use("/teacher", route)

  //Get all teacher information
  route.get("/", (req, res, next) => {})

  //Get a specific teacher information
  route.get("/:teacherId", (req, res, next) => {})

  //Create a new teacher
  route.post("/", async (req, res, next) => {
    const role = "TEACHER"
    const userData = req.body.userData
    const createdUser = await userService.createUser({ role, userData })
    res.status(200).json(createdUser)
  })

  //Update a teacher information
  route.put("/:teacherId", (req, res, next) => {})

  //Delete a specific teacher
  route.delete("/:teacherId", (req, res, next) => {})
}
