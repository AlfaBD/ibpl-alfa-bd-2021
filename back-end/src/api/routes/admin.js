const router = require("express")
const adminController = require("../../controllers/AdminController")
const route = router()
const tokenAuth = require("../middlewares/token-auth")

module.exports = (app) => {
  // Protecting with token auth
  app.use(tokenAuth())

  //All routes under this file will be prefixed with /student
  app.use("/admin", route)

  //Get all student information
  route.get("/", adminController.index)

  //Get a specific student information
  route.get("/:adminId", adminController.show)

  //Create a new student
  route.post("/", adminController.store)

  //Update a student information
  route.put("/:adminId", adminController.update)

  //Delete a specific student
  route.delete("/:adminId", adminController.delete)
}
