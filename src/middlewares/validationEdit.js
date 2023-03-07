const { validateEdit } = require('../utils/validations/validateEdit');

const middlewarevalidateEdit = (req, res, next) => {
  const post = req.body;
  const response = validateEdit(post);
  if (response.error) {
    return res.status(400).json({ message: response.error.message });
  }
  next();
};

module.exports = middlewarevalidateEdit;