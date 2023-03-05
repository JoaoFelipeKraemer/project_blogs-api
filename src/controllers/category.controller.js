// const jwt = require('jsonwebtoken');
const categoryService = require('../services/category.service');

// const secret = process.env.JWT_SECRET;
// const jwtConfig = {
//   expiresIn: '15min',
//   algorithm: 'HS256',
// };

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newName = await categoryService.createCategory(name);
  //   console.log(user);
     
    res.status(201).json(newName);
  };

  module.exports = {
    createCategory,
  };