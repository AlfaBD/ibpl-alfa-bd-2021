const expressJwt = require("express-jwt")

module.exports = () => {
  const secret = process.env.SECRET
  return expressJwt({
    secret: secret,
    algorithms: ["HS256"],
    getToken: (req) => {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1]
      } else {
        return null
      }
    },
  })
}
