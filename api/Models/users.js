// Object Document Mapper
const mongoose = require("mongoose");
// Function to create schemas
const { Schema } = mongoose;

const UsersSchema = Schema({
  // Personal information
  information: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  // Authentication fields
  credentials: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    loginToken: {
      type: String,
      required: false,
    },
  },
  // Membership & account details
  account: {
    created_at: {
      type: Date,
      default: Date.now,
    },
    lastLogin: {
      type: Date,
    },
    emailValidation: {
      status: {
        type: Boolean,
        default: false,
      },
      validationToken: {
        type: String,
      },
    },
  },
});

// Export the schema to the project
module.exports = mongoose.model("Users", UsersSchema);
