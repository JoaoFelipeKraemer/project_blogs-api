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
  const newUserId = user.dataValues.id;
  const token = jwt.sign({ data: { userId: newUserId } }, secret, jwtConfig);

  res.status(201).send({ token });
};

const getAll = async (_req, res) => {
    // const { username, admin } = req.user;
   const users = await userService.getAll();  
   return res.status(200).json(users);   
};

const getById = async (req, res) => {
 const { id } = req.params;
 const user = await userService.getById(id);
 if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
 }
 return res.status(200).json(user);
};

const deleteById = async (req, res) => {
  const { payload } = req.user;
  const { data } = payload;
  const { userId } = data;
  const user = await userService.getById(userId);
  if (user) {
      await userService.deleteById(userId);
  return res.status(204).end();
  }
};

module.exports = {
    deleteById,
    createUser,
    getAll,
    getById,
};