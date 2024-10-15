const APIFeatures = require("../utils/apiFeatures");
const Restaurant = require("../models/restaurantModel");
const uploadImage = require("../utils/uploadImage");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.APP_CLOUDINARY_API_KEY,
  api_secret: process.env.APP_CLOUDINARY_SECRET_KEY,
});

class restaurantController {
  async getAllRestaurants(req, res) {
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
  }

  async createRestaurant(req, res) {
    try {
      const newRestaurant = await Restaurant.create(req.body);

      res.status(201).json({
        status: "success",
        data: {
          restaurant: newRestaurant,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  }

  async getRestaurant(req, res) {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      res.status(200).json({
        status: "success",
        data: {
          restaurant,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  }
  async updateRestaurant(req, res) {
    try {
      const restaurant = await Restaurant.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        status: "success",
        data: {
          restaurant,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  }
  async deleteRestaurant(req, res) {
    try {
      await Restaurant.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "success",
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  }

  async uploadRestaurantImagesToCloudinary(req, res) {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      if (!restaurant) {
        return res.status(404).json({
          status: "fail",
          message: "Restaurant not found",
        });
      }

      if (req.files.profileImage) {
        const profileImage = req.files.profileImage[0];
        const profileImgUrl = await uploadImage.uploadToCloudinary(
          profileImage
        );
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
    } catch (error) {
      console.error("Error uploading images to Cloudinary:", error);
      res.status(500).json({
        status: "error",
        message: "Image upload failed",
      });
    }
  }
}

module.exports = new restaurantController();
