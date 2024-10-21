const APIFeatures = require("../utils/apiFeatures");
const Dish = require("../models/dishModel");
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

class dishController {
  getAllDishes = asyncHandler(async (req, res) => {
    const features = new APIFeatures(Dish.find(), req.query)
      .filter()
      .sort()
      .limit()
      .paginate();

    const dishes = await features.query;

    res.status(200).json({
      status: "success",
      results: dishes.length,
      data: {
        dishes,
      },
    });
  });

  createDish = asyncHandler(async (req, res, next) => {
    const newDish = await Dish.create(req.body);
    if (!newDish) {
      return next(AppError.create("Dish not created", "Error", 404));
    }

    const restaurant = await Restaurant.findById(newDish.restaurantId);
    if (!restaurant) {
      return next(AppError.create("Restaurant not found", "Error", 404));
    }

    const categories = newDish.categories;
    restaurant.categoriesList = [];
    categories.forEach((category) => {
      const count = restaurant.categories.has(category)
        ? restaurant.categories.get(category)
        : 0;
      restaurant.categories.set(category, count + 1);
      restaurant.categoriesList.push(category);
    });
    await restaurant.save();

    res.status(201).json({
      status: "success",
      data: {
        dish: newDish,
      },
    });
  });

  getDish = asyncHandler(async (req, res, next) => {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return next(AppError.create("No dish found with that ID", "Error", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        dish,
      },
    });
  });

  updateDish = asyncHandler(async (req, res, next) => {
    const oldDish = await Dish.findById(req.params.id);
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!dish) {
      return next(AppError.create("Dish not found", "Error", 404));
    }

    // delete old categories from restaurant
    const categories = oldDish.categories;
    const restaurant = await Restaurant.findById(dish.restaurantId);
    restaurant.categoriesList = [];
    categories.forEach((category) => {
      const count = restaurant.categories.has(category)
        ? restaurant.categories.get(category)
        : 1;
      restaurant.categories.set(category, count - 1);
      if (count - 1 > 0) {
        restaurant.categoriesList.push(category);
      }
    });

    // add new categories to restaurant
    const newCategories = dish.categories;
    newCategories.forEach((category) => {
      const count = restaurant.categories.has(category)
        ? restaurant.categories.get(category)
        : 0;
      restaurant.categories.set(category, count + 1);
      restaurant.categoriesList.push(category);
    });
    await restaurant.save();

    res.status(200).json({
      status: "success",
      data: {
        dish,
      },
    });
  });

  deleteDish = asyncHandler(async (req, res, next) => {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) {
      return next(AppError.create("Dish not found", "Error", 404));
    }

    const categories = dish.categories;
    const restaurant = await Restaurant.findById(dish.restaurantId);
    restaurant.categoriesList = [];
    categories.forEach((category) => {
      const count = restaurant.categories.has(category)
        ? restaurant.categories.get(category)
        : 1;
      restaurant.categories.set(category, count - 1);
      if (count - 1 > 0) {
        restaurant.categoriesList.push(category);
      }
    });
    await restaurant.save();

    res.status(204).json({
      status: "success",
      data: "Deleted Successfully",
    });
  });

  uploadDishImageToCloudinary = asyncHandler(async (req, res, next) => {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return next(AppError.create("Dish not found", "Error", 404));
    }
    if (req.file) {
      const imageUrl = await uploadImage.uploadToCloudinary(req.file);
      console.log("imageUrl", imageUrl);
      dish.imageUrl = imageUrl;
    }

    await dish.save();
    res.status(200).json({
      status: "success",
      message: "Image uploaded successfully",
      data: {
        dish,
      },
    });
  });
}

module.exports = new dishController();
