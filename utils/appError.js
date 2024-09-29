class AppError extends Error{
  constructor(){
      super();
  }
  create(message,statusMessage,statusCode){
      this.message = message;
      this.statusCode = statusCode;
      this.statusMessage = statusMessage;
      return this;
  }
};

module.exports = new AppError();