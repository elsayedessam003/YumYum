

const duplicate = (error) => {
  const message = error.keyValue.username || error.keyValue.email;
  return (error.message = `${message} is already exist Please select another value`);
};

const handleJWTError = (err) => {
  return (err.message = "Token is invalid Please log in again");
};
const handleJWTEXP = (err) => {
  return (err.message = "Token Expired. Please log in again");
};

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.statusMessage = error.statusMessage || 'Error';

  if (error.code == 11000) duplicate(error);
  if (error.name === "JsonWebTokenError") handleJWTError(error);
  if (error.name === "TokenExpiredError") handleJWTEXP(error);

  res.status(error.statusCode).json({
    status: error.statusMessage,
    message: error.message,
    // error,
  });
};