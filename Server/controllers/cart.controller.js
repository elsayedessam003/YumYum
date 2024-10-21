// controllers/cart.controller.js
const Cart = require("../models/cart.model");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const Dish = require("../models/dishModel");

updateTotal = async (cart) => {
  let total = 0;
  for (let item of cart.items) {
    console.log(item);
    const newItem = await Dish.findById(item.productId);
    console.log(newItem);
    total += newItem.price * item.quantity;
  }
  cart.total = total;
  return total;
};

// Get all carts for a specific user
exports.getAllCarts = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const carts = await Cart.findOne({ userId });
  res.status(200).json({
    message: "Success",
    data: carts,
  });
});

exports.createCart = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const { productId, quantity, restaurantId } = req.body;

  if (!productId || !quantity || !restaurantId) {
    return next(
      AppError.create(
        "ProductId, restaurantId and quantity are required",
        "Error",
        400
      )
    );
  }

  let cart = await Cart.findOne({ userId });
  if (cart) {
    const existingItemIndex = cart.items.findIndex(
      (el) => el.productId.toString() == productId
    );

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
  } else {
    cart = new Cart({
      userId,
      restaurantId,
      items: [{ productId, quantity }],
    });
  }

  console.log(cart);
  cart.total = await updateTotal(cart);
  cart.restaurantId = restaurantId;
  await cart.save();

  res.status(200).json({ message: "Success", data: cart });
});

exports.updateCart = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return next(
      AppError.create("ProductId and quantity are required", "Error", 400)
    );
  }
  const cart = await Cart.findById(id);

  if (!cart) {
    return next(AppError.create("Cart not found", "Error", 404));
  }

  const existingItemIndex = cart.items.findIndex(
    (item) => item.productId.toString() == productId
  );

  if (existingItemIndex !== -1) {
    cart.items[existingItemIndex].quantity = quantity;
  } else {
    cart.items.push({ productId, quantity });
  }
  cart.total = await updateTotal(cart);

  await cart.save();

  res.status(200).json({ message: "Success", data: cart });
});

exports.deleteCart = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const cart = await Cart.findById(id);
  if (!cart) {
    return next(AppError.create("Cart not found", "Error", 400));
  }
  cart.items = [];
  cart.total = 0;
  cart.restaurantId = undefined;
  await cart.save({ validateBeforeSave: false });
  res.status(200).json({ message: "Cart deleted successfully" });
});

exports.deleteCartItem = asyncHandler(async (req, res, next) => {
  const { id, productId } = req.params;

  if (!productId) {
    return next(AppError.create("ProductId is required", "Error", 400));
  }

  const cart = await Cart.findById(id);

  if (!cart) {
    return next(AppError.create("Cart not found", "Error", 404));
  }

  const updatedItems = cart.items.filter(
    (item) => item.productId.toString() != productId
  );
  cart.items = updatedItems;
  cart.total = await updateTotal(cart);
  if (cart.total === 0 && !cart.items.length) {
    cart.restaurantId = undefined;
  }
  await cart.save();
  res.status(200).json({ message: "Item removed successfully", data: cart });
});
