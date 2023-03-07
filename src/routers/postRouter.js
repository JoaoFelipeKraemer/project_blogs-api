const express = require('express');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/validateToken');
const middlewarevalidatePost = require('../middlewares/validatePost');

const routerPost = express.Router();

routerPost.post('/', auth, middlewarevalidatePost, postController.postBlog);
routerPost.get('/', auth, postController.getAllPosts);
routerPost.get('/:id', auth, postController.getPostById);

module.exports = routerPost;