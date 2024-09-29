const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const Restaurant = require("../models/restaurant.model");
const cloudinary = require("cloudinary");


exports.createMyRestaurant = asyncHandler(async (req, res, next) => {
  const existingRestaurant = await Restaurant.findOne({ user_id: req.user.id });
  if (existingRestaurant) {
    return AppError.create("User restaurant already exists", "Error", 409);
  }
  // const image = req.file;
  // const base64Image = Buffer.from(image.buffer).toString("base64");
  // const dataURL = `data:${image.mimetype};base64,${base64Image}`;
  // const uploadRes = await cloudinary.v2.uploader.upload(dataURL);

  const imageUrl = await uploadImage(req.file)

  const restaurant = await Restaurant(req.body);
  restaurant.imageUrl = imageUrl;
  restaurant.user = req.user._id;
  restaurant.lastUpdated = new Date();
  await restaurant.save();
  res.status(201).json({
    message: "Sccess",
    data: {
      restaurant,
    },
  });
});

exports.getMyRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.findOne({ user: req.user._id });
  if (!restaurant) {
    return AppError.create("User restaurant not found", "Error", 404);
  }
  res.status(200).json({
    message: "Sccess",
    data: restaurant,
  });
});

exports.updateMyRestaurant = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const restaurant = await Restaurant.findOne({ user: req.user._id });
  if (!restaurant) {
    return AppError.create("User restaurant not found", "Error", 404);
  }
  restaurant.restaurantName = req.body.restaurantName;
  restaurant.city = req.body.city;
  restaurant.country = req.body.country;
  restaurant.deliveryPrice = req.body.deliveryPrice;
  restaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
  restaurant.cuisines = req.body.cuisines;
  restaurant.menuItems = req.body.menuItems;
  restaurant.lastUpdated = new Date();

  if(req.file){
    const imageUrl = await uploadImage(req.file);
    restaurant.imageUrl = imageUrl;
  }
  await restaurant.save();
  res.status(200).json({
    data: restaurant,
  });
});


const uploadImage = async(file)=>{
  const image = req.file;
  const base64Image = Buffer.from(image.buffer).toString("base64");
  const dataURL = `data:${image.mimetype};base64,${base64Image}`;
  const uploadRes = await cloudinary.v2.uploader.upload(dataURL);
  return uploadRes.url;
}