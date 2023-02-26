// Dependencies
const jwt = require("jsonwebtoken");

// Middleware to verify if request emitter is connected
const isAuthenticated = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_TOKEN_KEY,
      (err, decoded) => {
        // If not connected
        if (err) {
          console.log(err);
          res
            .status(400)
            .send({ error: true, message: "Must be authenticated" });
          return;
        } else {
          next();
        }
      }
    );
  } else {
    res
      .status(400)
      .send({ error: true, message: "Missing authorization headers" });
  }
};

const security = {
  isAuthenticated: isAuthenticated,
};

module.exports = security;
