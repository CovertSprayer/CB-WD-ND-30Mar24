const Joi = require("joi");

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).max(100000).required(),
  image: Joi.string().required(),
  description: Joi.string()
})

// const editProductSchema = Joi.object({})

module.exports = {
  createProductSchema,
  // editProductSchema
}