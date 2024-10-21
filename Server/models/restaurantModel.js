const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A restaurant must have a name"],
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
    type: Map,
    of: Number,
    default: {},
  },
  dishes: {
    type: [String],
  },
  rating: {
    type: Number,
    default: 0,
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
  bannerImgUrl: {
    type: String,
    // required: [true, "A restaurant must have a banner image"],
  },
  openingHours: {
    type: Number,
    default: 10,
  },
  closingHours: {
    type: Number,
    default: 22,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: [true, "A restaurant must have a creator"],
  },
  categoriesList: {
    type: [String],
    default: [],
  },
});

restaurantSchema.pre("save", function (next) {
  this.categorieslist = Object.keys(this.categories);
  next();
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
