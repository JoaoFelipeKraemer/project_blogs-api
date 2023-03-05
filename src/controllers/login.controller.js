const jwt = require('jsonwebtoken');
const loginService = require('../services/login.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const { email } = req.body;
  const user = await loginService.login(email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = jwt.sign({ email }, secret, jwtConfig);

  res.status(200).send({ token });
};

module.exports = {
    login,
};