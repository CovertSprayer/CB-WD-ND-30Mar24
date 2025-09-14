class AppError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
  }
}

class BadRequestExcetion extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

class InternalServerException extends AppError {
  constructor(message) {
    super(message, 500);
  }
}

module.exports = {
  BadRequestExcetion,
  InternalServerException
}

// BadRequestExcetion()
// InternalServerException()
// NotFoundException()
// UnAuthorizedException()
