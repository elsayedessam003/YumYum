const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const {jwtParse} = require("../middlewares/auth");
const {validateUser} = require('../middlewares/validation')

router.route("/login").post(userController.Login);
router.route("/register").post(userController.Register);

router
  .route("/user")
  .patch(jwtParse,validateUser, userController.updateUser)
  .get(jwtParse, userController.getCurrentUser);

module.exports = router;
