const postService = require('../services/post.service');

const blablablba = async (req, res) => {
    const { title, content, categoryIds } = req.body;    
    const { payload } = req.user;
    const { userId } = payload.data;
    const resolved = await postService.createPost(title, content, categoryIds, userId);
    if (resolved.message) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return res.status(201).json(resolved);
    };

    module.exports = {
        blablablba,
      };