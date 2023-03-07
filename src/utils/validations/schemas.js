const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().min(6).required(),
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'any.required': '{#label} is required',
    'string.min': '{#label} length must be at least {#limit} characters long',
    'string.email': '{#label} must be a valid email',
  }),
  image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '{#label} is required',
  }),
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required().messages({
    'any.required': 'one or more "categoryIds" not found',
    'string.empty': 'one or more "categoryIds" not found',
  }),
});

module.exports = {
  loginSchema,
  userSchema,
  categorySchema,
  postSchema,
};