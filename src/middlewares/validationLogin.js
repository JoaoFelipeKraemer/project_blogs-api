const { validateLogin } = require('../utils/validations/validateLogin');

const middlewareValidateLogin = (req, res, next) => {
  const login = req.body;
  const response = validateLogin(login);
  console.log(response.details);
  if (response.error) {
    return res.status(400).json({ message: response.error.message });
  }
  next();
};

module.exports = middlewareValidateLogin;