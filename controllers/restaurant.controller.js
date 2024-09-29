const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const Restaurant = require("../models/restaurant.model");
const cloudinary = require('cloudinary');
const  mongoose  = require("mongoose");

exports.createMyRestaurant = asyncHandler(async (req, res, next) => {
  const existingRestaurant = await Restaurant.findOne({ user_id: req.user.id });
  if (existingRestaurant) {
    return AppError.create("User restaurant already exists", "Error", 409);
  }
  const image = req.file;
  const base64Image = Buffer.from(image.buffer).toString('base64');
  const dataURL = `data:${image.mimetype};base64,${base64Image}`;
  const uploadRes = await cloudinary.v2.uploader.upload(dataURL);
  const restaurant = await Restaurant(req.body);
  restaurant.imageUrl = uploadRes.url;
  restaurant.user = new mongoose.Types.ObjectId(req.user._id);
  restaurant.lastUpdated = new Date()
  await restaurant.save();
  res.status(201).json({
    message: 'Sccess',
    data:{
      restaurant
    }
  })
});
