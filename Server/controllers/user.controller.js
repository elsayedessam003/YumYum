const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const jwt = require('jsonwebtoken')

const signToken = async (id) => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return token;
};

exports.Register = asyncHandler(async (req, res, next) => {
  const newUser = new User(req.body);
  await newUser.save();
  let token = await signToken(newUser._id);
  res.status(200).json({
    status: 'Success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.Login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      AppError.create("Please provide email and password", "error", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      AppError.create(
        "Incorrect email or password. Try login by another way",
        "error",
        401
      )
    );
  }
  const token = await signToken(user._id);
  res.status(200).json({
    status: 'Success',
    token,
  });
});

exports.getCurrentUser = asyncHandler(async (req, res, next) => {
  const currentUser = await User.findOne({ _id: req.user._id });
  if (!currentUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(currentUser);
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const { name, addressLine1, country, city } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(AppError.create("User not found", "Error", 404));
  }

  user.name = name;
  user.addressLine1 = addressLine1;
  user.country = country;
  user.city = city;
  await user.save({ validateBeforeSave: false });
  const token = await signToken(user._id);
  res.status(200).json({
    status: 'Success',
    message: "User updated",
    token,
    user,
  });
});
