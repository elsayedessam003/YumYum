const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const Restaurant = require("../models/restaurant.model");

exports.searchRestaurant = asyncHandler(async (req, res, next) => {
  const city = req.params.city;
  const searchQuery = req.query.searchQuery || "";
  const selectedCuisines = req.query.selectedCuisines || "";
  const sortOption = req.query.sortOption || "lastUpdated";
  const page = parseInt(req.query.page) || 1;

  let query = {};
  query["city"] = new RegExp(city, "i");
  const cityCheck = await Restaurant.countDocuments(query);
  if (cityCheck === 0) {
    return res.status(404).json({
      data: [],
      pagination: {
        total:0,
        page:1,
        pages: 1,
      },
    });
  }
  if (selectedCuisines) {
    const cuisinesArray = selectedCuisines
      .split(",")
      .map((cuisine) => new RegExp(cuisine, "i"));
    query["cuisines"] = { $all: cuisinesArray };
  }
  if (searchQuery) {
    const searchRegex = new RegExp(searchQuery, "i");
    query["$or"] = [
      {
        restaurantName: searchRegex,
      },
      {
        cuisines: { $in: [searchRegex] },
      },
    ];
  }
  const pageSize = 10;
  const skip = (page - 1) * pageSize;
  const restaurants = await Restaurant.find(query)
    .sort({ [sortOption]: 1 })
    .skip(skip)
    .limit(pageSize)
    .lean();
  const total = await Restaurant.countDocuments(query);

  const response = {
    data: restaurants,
    pagination: {
      total,
      page,
      pages: Math.ceil(total / pageSize),
    },
  };
  res.status(200).json(response);
});
