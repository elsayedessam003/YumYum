const express = require("express");
const router = express.Router();
const { param } = require("express-validator");
const globalRestaurantController = require('../controllers/global.restaurant.contoller')

router
  .route("/search/:city")
  .get(
    param("city")
      .isString()
      .trim()
      .notEmpty()
      .withMessage("City parament must be a valid string"),
      globalRestaurantController.searchRestaurant
  );

module.exports = router;
