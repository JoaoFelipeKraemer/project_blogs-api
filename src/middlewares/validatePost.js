const { validatePost } = require('../utils/validations/validatePost');

const middlewarevalidatePost = (req, res, next) => {
  const post = req.body;
  const response = validatePost(post);
  if (response.error) {
    return res.status(400).json({ message: response.error.message });
  }
  next();
};

module.exports = middlewarevalidatePost;