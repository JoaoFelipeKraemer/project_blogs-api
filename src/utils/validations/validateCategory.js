const { categorySchema } = require('./schemas');

const validateCategory = (category) => {
  const validation = categorySchema.validate(category);
  return validation;
};

module.exports = {
  validateCategory,
};  