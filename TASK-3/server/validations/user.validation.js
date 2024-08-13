const Joi = require("joi");

const CreateUser = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email(),
  password: Joi.string().min(8).required(),
  address: Joi.string(),
  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  dateOfBirth: Joi.date().less("now").required(),
});

const UserLogin = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(8).required(),
});

module.exports = { CreateUser, UserLogin };
