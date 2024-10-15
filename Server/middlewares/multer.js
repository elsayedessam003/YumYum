const multer = require("multer");
const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

exports.uploadRestaurantImages = upload.fields([
  { name: "backgroundImage", maxCount: 1 },
  { name: "profileImage", maxCount: 1 },
]);

exports.uploadRestaurantImage = upload.single("profileImage");
