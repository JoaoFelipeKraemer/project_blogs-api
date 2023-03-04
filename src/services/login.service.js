const { User } = require('../models');
/// verifica o bando de dados
const hasUser = async (email) => {
    const result = await User.findOne({ where: { email } });
    return result;
  };

const login = async (email) => {
    const blablab = hasUser(email);
    if (blablab) {
       const user = await User
    .findOne({ where: { email }, attributes: { exclude: ['password'] } });
    return user; 
    }
};   
    
module.exports = {
    login,
};