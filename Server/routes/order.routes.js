const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { jwtParse } = require("../middlewares/auth");

router
  .route("/")
  .get(jwtParse, orderController.getAllOrders)
  .post(jwtParse, orderController.createOrder);

router
  .route("/:id")
  .put(jwtParse, orderController.updateOrder)
  .delete(jwtParse, orderController.deleteOrder);

module.exports = router;
