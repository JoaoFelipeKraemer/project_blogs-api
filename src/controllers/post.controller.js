const postService = require('../services/post.service');

const postBlog = async (req, res) => {
    const { title, content, categoryIds } = req.body;    
    const { payload } = req.user;
    const { data } = payload;
    const { userId } = data;
    const resolved = await postService.createPost(title, content, categoryIds, userId);
    if (resolved.message) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return res.status(201).json(resolved);
    };

const getAllPosts = async (_req, res) => {
    const resolved = await postService.getAllPosts();
    return res.status(200).json(resolved);
};

const getPostById = async (req, res) => {
 const { id } = req.params;
 const resolved = await postService.getPostById(id);
 if (!resolved) {
    return res.status(404).json({ message: 'Post does not exist' });
 }
 return res.status(200).json(resolved);
};

const editById = async (req, res) => {
    const { id } = req.params;
    const { payload } = req.user;
    const { title, content } = req.body;
    const { data } = payload;
    const { userId } = data;
    const user = await postService.getPostById(id);
    if (userId !== user.user.id) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    const exemplo = await postService.editById(id, { title, content });
    return res.status(200).json(exemplo);
};

const deleteById = async (req, res) => {
    const { id } = req.params;
    const { payload } = req.user;
    const { data } = payload;
    const { userId } = data;
    const user = await postService.getPostById(id);
    if (!user) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    if (userId !== user.user.id) {
        return res.status(401).json({ message: 'Unauthorized user' });
    } 
    await postService.deleteById(id);
    return res.status(204).end();
};

    module.exports = {
        deleteById,
        editById,
        postBlog,
        getAllPosts,
        getPostById,
      };