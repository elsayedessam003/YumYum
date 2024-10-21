const reviewController = require("../controllers/reviewController");
const express = require("express");
const router = express.Router();
const { jwtParse } = require("../middlewares/auth");

router
  .route("/")
  .get(jwtParse, reviewController.getAllReviews)
  .post(jwtParse, reviewController.createReview);

router
  .route("/:id")
  .get(reviewController.getReview)
  .put(jwtParse, reviewController.updateReview)
  .delete(reviewController.deleteReview);
module.exports = router;
