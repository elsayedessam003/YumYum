const APIFeatures = require("../utils/apiFeatures");
const Review = require("../models/reviewModel");
const Restaurant = require("../models/restaurantModel");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");

class reviewController {
  getAllReviews = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const features = new APIFeatures(Review.find({ userId: userId }), req.query)
      .filter()
      .sort()
      .limit()
      .paginate();

    const reviews = await features.query;

    res.status(200).json({
      status: "success",
      results: reviews.length,
      data: {
        reviews,
      },
    });
  });

  createReview = asyncHandler(async (req, res, next) => {
    const newReview = await Review.create({
      ...req.body,
      userId: req.user._id,
    });
    if (!newReview) {
      return next(AppError.create("Review not created", 404));
    }

    const restaurant = await Restaurant.findById(newReview.restaurantId);
    if (!restaurant) {
      return next(AppError.create("No restaurant found with that ID", 404));
    }

    let sum = restaurant.rating * restaurant.ratingCount;
    sum += newReview.rating;
    restaurant.ratingCount += 1;
    restaurant.rating = sum / restaurant.ratingCount;
    await restaurant.save();

    res.status(201).json({
      status: "success",
      data: {
        review: newReview,
      },
    });
  });

  getReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return next(AppError.create("No review found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        review,
      },
    });
  });

  updateReview = asyncHandler(async (req, res, next) => {
    const oldReview = await Review.findById(req.params.id);
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { ...req.body, userId: req.user._id },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!review) {
      return next(AppError.create("No review found with that ID", 404));
    }

    const restaurant = await Restaurant.findById(review.restaurantId);
    if (!restaurant) {
      return next(AppError.create("No restaurant found with that ID", 404));
    }

    let sum = restaurant.rating * restaurant.ratingCount;
    sum -= oldReview.rating;
    sum += review.rating;
    restaurant.rating = sum / restaurant.ratingCount;
    await restaurant.save();

    res.status(200).json({
      status: "success",
      data: {
        review,
      },
    });
  });

  deleteReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return next(AppError.create("No review found with that ID", 404));
    }

    const restaurant = await Restaurant.findById(review.restaurantId);
    if (!restaurant) {
      return next(AppError.create("No restaurant found with that ID", 404));
    }

    let sum = restaurant.rating * restaurant.ratingCount;
    sum -= review.rating;
    restaurant.rating = sum / restaurant.ratingCount;
    restaurant.ratingCount -= 1;
    await restaurant.save();

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
}

module.exports = new reviewController();
