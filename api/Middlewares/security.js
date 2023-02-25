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
          console.log("@@@@@@@@@@@@@@@DEBUG DECODED = ", decoded);
          req.userId = decoded._id;
          req.email = decoded.email;
          req.token = req.headers.authorization.split(" ")[1];
          req.first_name = decoded.first_name;
          req.last_name = decoded.first_name;
          req.membership = req.role;
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
