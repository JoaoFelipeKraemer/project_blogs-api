const express = require('express');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/validateToken');
const middlewareValidateUser = require('../middlewares/validationUser');

const routerUser = express.Router();

routerUser.post('/', middlewareValidateUser, userController.createUser);
routerUser.get('/', auth, userController.getAll);
routerUser.get('/:id', auth, userController.getById);
routerUser.delete('/me', auth, userController.deleteById);

module.exports = routerUser;