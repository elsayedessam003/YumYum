const reviewController = require("../controllers/reviewController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(reviewController.createReview);

router
  .route("/:id")
  .get(reviewController.getReview)
  .put(reviewController.updateReview)
  .delete(reviewController.deleteReview);
module.exports = router;
