const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
    required: [true, "A dish must belong to a restaurant"],
  },
  name: {
    type: String,
    required: [true, "A dish must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A dish must have a price"],
  },
  description: {
    type: String,
  },
  categories: {
    type: [String],
  },
  available: {
    type: Boolean,
    default: true,
  },
  imageUrl: {
    type: String,
  },
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
