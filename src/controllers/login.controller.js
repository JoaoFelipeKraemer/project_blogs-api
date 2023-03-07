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
  const newUserId = user.dataValues.id;
  const token = jwt.sign({ data: { userId: newUserId } }, secret, jwtConfig);

  res.status(200).send({ token });
};

module.exports = {
    login,
};