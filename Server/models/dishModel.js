const mongoose = require("mongoose");
const restaurant = require("./restaurantModel");
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
// dishSchema.post("save", async function (next) {
//   const restaurant = await restaurant.findById(this.restaurantId);
//   const categories = Object.keys(restaurant.categories);
//   console.log(categories);
//   next();
// });
const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
