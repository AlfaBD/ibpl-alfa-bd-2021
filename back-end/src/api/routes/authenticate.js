const jwt = require("jsonwebtoken")
const router = require("express")
const userService = require("../../services/user")
const route = router()

module.exports = (app) => {
  app.use("/authenticate", route)

  // Authenticate route
  route.post("/", async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    // Pull user from Database
    const pulledUser = await userService.getUserByUsername({ username })

    //User was not found
    if (!pulledUser) {
      res.status(404).json({ message: "User not found" })
    }

    // Successful validation
    if (pulledUser.isPasswordValid(password)) {
      const token = jwt.sign({ sub: username }, process.env.SECRET, {
        expiresIn: "7d",
        algorithm: "HS256",
      })
      res
        .json({
          message: "Success",
          role: pulledUser.role,
          token,
          user: pulledUser.usr_id,
        })
        .status(200)
    } else {
      res.json({ message: "Error" }).status(403)
    }
  })
}
