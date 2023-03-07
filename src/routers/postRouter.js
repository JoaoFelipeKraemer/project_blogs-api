const express = require('express');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/validateToken');
const middlewarevalidatePost = require('../middlewares/validationLogin');

const routerPost = express.Router();

routerPost.post('/', auth, middlewarevalidatePost, postController.blablablba);

module.exports = routerPost;