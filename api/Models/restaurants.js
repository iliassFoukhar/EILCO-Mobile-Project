// Object Document Mapper
const mongoose = require("mongoose");
// Function to create schemas
const { Schema } = mongoose;

const RestaurantsSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  stars: {
    type: Number,
    default: 0,
  },
  numberOfRates: {
    type: Number,
    default: 0,
  },
  categories: {
    type: Array,
    required: true,
  },
  adress: {
    type: String,
    required: false,
    default: "62100, Calais",
  },
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
      stars: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
        required: false,
      },
      first_name: {
        type: String,
        required: false,
        default: "Anonymous",
      },
      last_name: {
        type: String,
        required: false,
        default: "Anonymous",
      },
    },
  ],
});

// Export the schema to the project
module.exports = mongoose.model("Restaurants", RestaurantsSchema);
