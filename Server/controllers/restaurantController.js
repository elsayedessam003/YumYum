const APIFeatures = require("../utils/apiFeatures");
const Restaurant = require("../models/restaurantModel");
const uploadImage = require("../utils/uploadImage");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.APP_CLOUDINARY_API_KEY,
  api_secret: process.env.APP_CLOUDINARY_SECRET_KEY,
});

class restaurantController {
  getAllRestaurants = asyncHandler(async (req, res) => {
    const features = new APIFeatures(Restaurant.find(), req.query)
      .filter()
      .sort()
      .limit()
      .paginate();

    const restaurants = await features.query;

    res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: {
        restaurants,
      },
    });
  });

  createRestaurant = asyncHandler(async (req, res, next) => {
    const newRestaurant = await Restaurant.create(req.body);
    if (!newRestaurant) {
      return next(AppError.create("Restaurant not created", 404));
    }

    res.status(201).json({
      status: "success",
      data: {
        restaurant: newRestaurant,
      },
    });
  });

  getRestaurant = asyncHandler(async (req, res, next) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return next(AppError.create("No restaurant found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        restaurant,
      },
    });
  });

  updateRestaurant = asyncHandler(async (req, res, next) => {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!restaurant) {
      return next(AppError.create("No restaurant found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        restaurant,
      },
    });
  });
  deleteRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return next(AppError.create("No restaurant found with that ID", 404));
    }
    res.status(204).json({
      status: "success",
    });
  });

  uploadRestaurantImagesToCloudinary = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({
        status: "fail",
        message: "Restaurant not found",
      });
    }

    if (req.files.profileImage) {
      const profileImage = req.files.profileImage[0];
      const profileImgUrl = await uploadImage.uploadToCloudinary(profileImage);
      restaurant.profileImgUrl = profileImgUrl;
    }

    if (req.files.backgroundImage) {
      const backgroundImage = req.files.backgroundImage[0];
      const backgroundImgUrl = await uploadImage.uploadToCloudinary(
        backgroundImage
      );
      restaurant.backgroundImgUrl = backgroundImgUrl;
    }

    await restaurant.save();

    res.status(200).json({
      status: "success",
      message: "Images uploaded successfully",
      data: {
        restaurant,
      },
    });
    console.error("Error uploading images to Cloudinary:", error);
    // res.status(500).json({
    //   status: "error",
    //   message: "Image upload failed",
    // });
  });
}

module.exports = new restaurantController();
