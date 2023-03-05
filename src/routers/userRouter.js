const express = require('express');
const userController = require('../controllers/user.controller');
const middlewareValidateUser = require('../middlewares/validationUser');

const routerUser = express.Router();

routerUser.post('/', middlewareValidateUser, userController.createUser);

module.exports = routerUser;