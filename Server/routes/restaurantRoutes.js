const express = require("express");

const restaurantController = require("./../controllers/restaurantController");
const uploadImages = require("./../middlewares/multer");
const router = express.Router();

router
  .route("/")
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

router
  .route("/:id")
  .get(restaurantController.getRestaurant)
  .put(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

router
  .route("/:id/upload")
  .post(
    uploadImages.uploadRestaurantImages,
    restaurantController.uploadRestaurantImagesToCloudinary
  );
module.exports = router;
