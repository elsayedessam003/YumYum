const Order = require("../models/order.model");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const User = require("../models/user.model");

exports.getAllOrders = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const { status, offset = 0, limit = 5 } = req.query;

  const query = { userId };
  if (status) {
    query.status = status;
  }
  const orders = await Order.find(query)
    .skip(parseInt(offset))
    .limit(parseInt(limit));

  res.status(200).json({
    message: "Success",
    data: orders,
    length: orders.length,
  });
});

exports.createOrder = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const { items, total } = req.body;

  if (!items || !total) {
    return next(AppError.create("Items, and total are required", "Error", 400));
  }

  const order = new Order({ userId, items, total });
  await order.save();

  const user = await User.findById(userId);
  console.log(user);
  user.orderHistory.push(order._id);
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    message: "Success",
    data: order,
  });
});

exports.updateOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { status, items, total } = req.body;

  const order = await Order.findById(id);
  if (!order) {
    return next(AppError.create("Order not found", "Error", 404));
  }

  if (status) order.status = status;
  if (items) order.items = items;
  if (total) order.total = total;

  await order.save();

  res.status(200).json({
    message: "Success",
    data: order,
  });
});

exports.deleteOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.findByIdAndDelete(id);
  if (!order) {
    return next(AppError.create("Order not found", "Error", 404));
  }
  res.status(200).json({
    message: "Order deleted successfully",
  });
});
