const express = require("express");

const dishController = require("./../controllers/dishController");
const uploadImages = require("./../middlewares/multer");
const router = express.Router();

router
  .route("/")
  .get(dishController.getAllDishes)
  .post(dishController.createDish);

router
  .route("/:id")
  .get(dishController.getDish)
  .put(dishController.updateDish)
  .delete(dishController.deleteDish)
  .post(
    uploadImages.uploadDishImage,
    dishController.uploadDishImageToCloudinary
  );

module.exports = router;
