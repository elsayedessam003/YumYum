const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { jwtParse } = require("../middlewares/auth");
const { validateUser } = require("../middlewares/validation");

router.route("/login").post(userController.Login);
router.route("/register").post(userController.Register);

router.route("/user").put(jwtParse, userController.updatePassword);

router
  .route("/user/:id")
  .get(userController.getCurrentUser)
  .put(jwtParse, validateUser, userController.updateUser);

module.exports = router;
