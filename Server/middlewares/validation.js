const { validationResult, body } = require("express-validator");

const handleValidationError = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

exports.validateUser = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  handleValidationError,
];

exports.validateRestaurant = [
  body("restaurantName").notEmpty().withMessage("Restaurant Name is required"),
  body("country").isString().notEmpty().withMessage("Country is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("Delivery Price must be positive number"),
  body("estimatedDeliveryTime")
    .isFloat({ min: 0 })
    .withMessage("Estimated delivery time must be positive integar"),
  body("cuisines")
    .isArray()
    .withMessage("Cuisines must be array")
    .notEmpty()
    .withMessage("Cuisines array cannot be empty"),
  body("menuItems").isArray().withMessage("Menu Items must be array"),
  body("menuItems.*.name")
    .notEmpty()
    .withMessage("Menu Items name is required"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage("Menu Items price is required and must be positive number"),
  handleValidationError,
];
