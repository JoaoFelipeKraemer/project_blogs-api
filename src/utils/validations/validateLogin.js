const { loginSchema } = require('./schemas');

const validateLogin = (login) => {
  const validation = loginSchema.validate(login);
  return validation;
};

module.exports = {
  validateLogin,
};