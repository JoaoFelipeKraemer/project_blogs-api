const { validateUser } = require('../utils/validations/validateUser');

const middlewareValidateUser = (req, res, next) => {
  const user = req.body;
  const response = validateUser(user);
//   console.log(response.details);
  if (response.error) {
    return res.status(400).json({ message: response.error.message });
  }
  next();
};

module.exports = middlewareValidateUser;