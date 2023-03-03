const express = require('express');
const UserController = require('../controllers/user.controller');
const { validateLoginBody } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateLoginBody, UserController.login);

module.exports = router;