const { postSchema } = require('./schemas');

const validatePost = (post) => {
    const validation = postSchema.validate(post);
    return validation;
  };
  
  module.exports = {
    validatePost,
  };