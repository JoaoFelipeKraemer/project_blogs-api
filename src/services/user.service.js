const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const user = await User.findOne({ where: { email },
        attributes: { exclude: ['password'] } });
    if (user) {
        // console.log(user);
        return email;
    } if (!user) {
       const newUser = await User.create({ displayName, email, password, image });
     return newUser;  
    }
};  

const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getById = async (userId) => {
    const user = User.findByPk(userId, { attributes: { exclude: ['password'] } });
    return user;
};

module.exports = {
    createUser,
    getById,
    getAll,
};