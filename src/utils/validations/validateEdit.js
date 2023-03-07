const { editSchema } = require('./schemas');

const validateEdit = (edit) => {
  const validation = editSchema.validate(edit);
  return validation;
};

module.exports = {
  validateEdit,
};