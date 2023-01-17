// Dependencies
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const UserSchema = require("../Models/users");

router.post("/register", async (req, res) => {
  try {
    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    let password = await bcrypt.hash(req.body.password, salt);
    // Getting all the necessary data & storing them in an object
    let user = {
      information: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      credentials: {
        email: req.body.email,
        password: password,
      },
    };

    // Sign using jwt token
    const token = jwt.sign(
      {
        user: user,
      },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: "24h", // For security Measures
      }
    );
    user.credentials.loginToken = token;

    // Validate the user
    user.validate(function (err) {
      if (err) {
        res.status(400).json(err);
        return;
      } else {
        //Finally save the User
        let userObject = new UserSchema(user);
        userObject.save(function (err) {
          if (err) {
            res.status(400).json(err);
            return;
          }

          //Remove Password before sending User details
          userObject.password = undefined;
          res.status(200).json(userObject);
        });
      }
    });
  } catch (err) {
    console.log("\n\n");
    console.log("Error in User/register route");
    console.error(err);
    console.log("\n\n");
    res.status(400).json(err);
  }
});
