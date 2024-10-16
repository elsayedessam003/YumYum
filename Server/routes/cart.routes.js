// routes/cart.routes.js
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");
const { jwtParse } = require("../middlewares/auth");

router
  .route("/")
  .get(jwtParse, cartController.getAllCarts)
  .post(jwtParse, cartController.createCart);

router
  .route("/:id")
  .put(jwtParse, cartController.updateCart)
  .delete(jwtParse, cartController.deleteCart);

module.exports = router;
