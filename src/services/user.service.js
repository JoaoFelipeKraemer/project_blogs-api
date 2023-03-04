const { User } = require('../models');

const createUser = async (email, password, displayName, _image) => {
    try {
        const newUser = await User.create({ email, password, displayName });
        return newUser;
    } catch (error) {
        return { type: 'error', message: error.message };
    }        
};   

module.exports = {
    createUser,
};