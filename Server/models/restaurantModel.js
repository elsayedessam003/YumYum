const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A restaurant must have a name"],
    unique: true,
  },
  description: {
    type: String,
  },
  address: {
    type: Object,
  },
  contact: {
    type: String,
  },
  categories: {
    type: [String],
  },
  dishes: {
    type: [String],
  },
  rating: {
    type: Number,
    default: Math.floor(Math.random() * 3) + 3,
  },
  ratingCount: {
    type: Number,
    default: 0,
  },
  cuisine: {
    type: String,
  },
  deliveryTime: {
    type: Number,
    default: 30,
  },
  deliveryFees: {
    type: Number,
    default: 20,
  },
  profileImgUrl: {
    type: String,
    // required: [true, "A restaurant must have a profile image"],
  },
  backgroundImgUrl: {
    type: String,
    // required: [true, "A restaurant must have a background image"],
  },
  openingHours: {
    type: Number,
    default: 10,
  },
  closingHours: {
    type: Number,
    default: 22,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
