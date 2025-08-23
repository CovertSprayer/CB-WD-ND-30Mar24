const Joi = require('joi'); //zod

const registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(4).required(),
  role: Joi.string().required().valid("buyer", "seller"),
  email: Joi.string().email()
})

module.exports = {
  registerSchema
}