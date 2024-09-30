const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.jwtParse = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      AppError.create(
        "You are not logged in! Please log in to get access.",
        "FAIL",
        401
      )
    );
  }


  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  
  if (!user) {
    return next(
      AppError.create(
        "The user belonging to this token no longer exists.",
        "ERROR",
        401
      )
    );
  }

  req.user = user;
  next();
});
