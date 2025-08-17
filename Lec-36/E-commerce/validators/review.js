const Joi = require("joi");

const createReviewSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  text: Joi.string().min(0)
})


module.exports = {
  createReviewSchema,
}