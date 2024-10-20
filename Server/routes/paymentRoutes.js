const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");

router.route("/create-checkout-session").post(paymentController.createPayment);
module.exports = router;
