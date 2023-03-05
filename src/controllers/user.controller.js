const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
//   console.log(user);
  if (user === email) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const token = jwt.sign({ email }, secret, jwtConfig);

  res.status(201).send({ token });
};

module.exports = {
    createUser,
};