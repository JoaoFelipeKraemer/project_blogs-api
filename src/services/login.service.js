const { User } = require('../models');
/// verifica o bando de dados
const login = async (email) => {
    const user = await User
    .findOne({ where: { email }, attributes: { exclude: ['password'] } });
    if (user) {
    return user; 
    }
};   
    
module.exports = {
    login,
};