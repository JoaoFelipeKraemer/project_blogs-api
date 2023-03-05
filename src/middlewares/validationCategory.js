const { validateCategory } = require('../utils/validations/validateCategory');

const middlewareValidateCategory = (req, res, next) => {
  const name = req.body;
  const response = validateCategory(name);
//   console.log(response.details);
  if (response.error) {
    return res.status(400).json({ message: response.error.message });
  }
  next();
};

module.exports = middlewareValidateCategory;