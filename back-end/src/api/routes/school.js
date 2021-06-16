const router = require("express")
const schoolService = require("../../services/school")
const route = router()
const tokenAuth = require("../middlewares/token-auth")

module.exports = (app) => {
  // Middleware - token authentication
  app.use(tokenAuth())

  //All routes under this file will be prefixed with /analysis
  app.use("/analysis", route)

  //Process predicition student speech
  route.post("/predict/:studentId/:speech", (req, res, next) => {})

  //All routes under this file will be prefixed with /school
  app.use("/school", route)

  //Get all school information
  route.get("/", (req, res, next) => {})

  //Get a specific school information
  route.get("/:schoolId", (req, res, next) => {})

  //Create a new school
  route.post("/", async (req, res, next) => {
    const schoolData = req.body.schoolData
    const createdSchool = await schoolService.createSchool({ schoolData })
    res.status(200).json(createdSchool)
  })

  //Update a school information
  route.put("/:schoolId", (req, res, next) => {})

  //Delete a specific school
  route.delete("/:schoolId", (req, res, next) => {})
}
