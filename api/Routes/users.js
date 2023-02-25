// Dependencies
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const UserSchema = require("../Models/users");

router.post("/register", async (req, res) => {
  try {
    console.log("\n\n TRYING TO REGISTER")
    // Encrypt password
    const salt = await bcrypt.genSalt(10);

    let password = await bcrypt.hash(req.body.password, salt);

    // Getting all the necessary data & storing them in an object
    let user = new UserSchema({
      information: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      credentials: {
        email: req.body.email,
        password: password,
      },
    });

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

// Authenticate route
router.post("/login", async (req, res) => {
  // Globals
  let user;
  // Retrieving data
  const { email, password } = req.body;

  // Check if no user has the email provided
  try {
    user = await UserSchema.findOne({ "credentials.email": email });
    if (!user || user === undefined || user === null || user === {}) {
      res.status(404).send({
        user: null,
        success: false,
        message: "Email provided doesn't exist in DB",
      });
      return;
    }
  } catch (err) {
    console.error("\nCheck if user provided is correct route catch(err)");
    console.error(err);
    res.status(400).send({
      user: null,
      success: false,
      message: "An internal error occured !",
    });
  }
  try {
    // Check the password correctness
    let verified = bcrypt.compareSync(password, user.credentials.password);
    if (verified === true) {
      // Create the token
      const token = jwt.sign(
        {
          email: user.credentials.email,
          first_name: user.information.first_name,
          last_name: user.information.last_name,
        },
        process.env.JWT_TOKEN_KEY,
        {
          // expiresIn: "10s",
          expiresIn: "22h",
        }
      );
      // Update token
      user.credentials.token = token;

      // Update last login date
      user.lastLogin = Date.now();

      // If it's first time connecting
      if (user.account.emailValidation.status === false)
        user.account.emailValidation.status = true;

      await user.save();
      // If everything goes well, login the user
      res.status(200).send({
        success: true,
        token: token,
        user: user,
        message: "Authentication success!",
        error: false,
      });
    } else {
      // If password is wrong send an error
      res.status(400).send({
        error: true,
        message: "Password is wrong",
      });
    }
  } catch (err) {
    res.status(400).send({
      error: true,
      success: false,
      message: "An error occurred in auth",
    });
  }
});
module.exports = router;
