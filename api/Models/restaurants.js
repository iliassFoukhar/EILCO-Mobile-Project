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
});

// Export the schema to the project
module.exports = mongoose.model("Restaurants", RestaurantsSchema);
