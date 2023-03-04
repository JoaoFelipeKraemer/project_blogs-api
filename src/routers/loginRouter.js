const express = require('express');
const loginController = require('../controllers/login.controller');
const middlewareValidateLogin = require('../middlewares/validationLogin');

const routerLogin = express.Router();

routerLogin.post('/', middlewareValidateLogin, loginController.login);

module.exports = routerLogin;