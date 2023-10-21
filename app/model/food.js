const mongoose = require("mongoose");

// Define the Mongoose schema
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isGood: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model based on the schema
const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
