const express = require("express");
const multer = require("multer");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");
const { jwtParse } = require("../middlewares/auth");
const { validateRestaurant } = require("../middlewares/validation");

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1025,
  },
});

router
  .route("/")
  .post(
    jwtParse,
    validateRestaurant,
    upload.single("imageFile"),
    restaurantController.createMyRestaurant
  )
  .get(jwtParse, restaurantController.getMyRestaurant)
  .patch(jwtParse, restaurantController.updateMyRestaurant);

module.exports = router;
