const { userSchema } = require('./schemas');

const validateUser = (user) => {
    const validation = userSchema.validate(user);
    return validation;
  };
  
  module.exports = {
    validateUser,
  };