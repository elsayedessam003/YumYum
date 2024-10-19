const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
    required: [true, "A review must belong to a restaurant"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A review must belong to a user"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "A review must have a rating"],
  },
  review: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
reviewSchema.index({ restaurantId: 1, userId: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
