const express = require('express');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/validateToken');
const middlewarevalidatePost = require('../middlewares/validatePost');
const middlewarevalidateEdit = require('../middlewares/validationEdit');

const routerPost = express.Router();
routerPost.delete('/:id', auth, postController.deleteById);
routerPost.post('/', auth, middlewarevalidatePost, postController.postBlog);
routerPost.put('/:id', auth, middlewarevalidateEdit, postController.editById);
routerPost.get('/', auth, postController.getAllPosts);
routerPost.get('/:id', auth, postController.getPostById);

module.exports = routerPost;