// const { createProductSchema } = require("../validators/product");
// const { createReviewSchema } = require("../validators/review");

function validate(schema) {
  return function(req, res, next) {
    const body = req.body;
    const {error, value} = schema.validate(body);
    if(error) {
      console.log(error);
      return res.render("error.ejs", {error});
    }
    req.body = value;
    next();
  }
}

module.exports = validate;

// function validateProduct(req, res, next) {
//   const body = req.body;
//   const {error, value} = createProductSchema.validate(body);
//   if(error) {
//     console.log(error);
//     return res.render("error.ejs", {error});
//   }
//   req.body = value;
//   next();
// }

// function validateReview(req, res, next) {
//   const body = req.body;
//   const {error, value} = createReviewSchema.valid(body);
//   if(error) {
//     console.log(error);
//     return res.render("error.ejs", {error});
//   }
//   req.body = value;
//   next();
// }

// function validateUser(req, res, next) {

// }

// module.exports = {
//   validateProduct,
//   validateReview,
//   validateUser
// }