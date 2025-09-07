
const success = (res, data, message = "Success", status=200) => {
  return res.status(status).json({
    success: true, 
    message: message,
    data
  })
}

const error = (res, err, message = "Internal Server Error", status = 500) => {
  return res.status(status).json({
    success: true, 
    message: message,
    err: err.message
  })
}

module.exports = {
  success, error
}