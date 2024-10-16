// controllers/cart.controller.js
const Cart = require("../models/cart.model");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");

// Get all carts for a specific user
exports.getAllCarts = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const carts = await Cart.find({ userId });
  res.status(200).json({
    message: "Success",
    data: carts,
  });
});

// Create a new cart
exports.createCart = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const { items } = req.body;
  if (!items) {
    return next(AppError.create("UserId and items are required", "Error", 400));
  }
  const cart = new Cart({ userId, items });
  await cart.save();
  res.status(200).json({ message: "Success", data: cart });
});

exports.updateCart = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { items } = req.body;
  const cart = await Cart.findByIdAndUpdate(id, { items }, { new: true });
  if (!cart) {
    return next(AppError.create("Cart not found", "Error", 400));
  }

  res.status(200).json({ message: "Success", data: cart });
});

exports.deleteCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findByIdAndDelete(id);
  if (!cart) {
    return next(AppError.create("Cart not found", "Error", 400));
  }
  res.status(200).json({ message: "Cart deleted successfully" });
});
