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

module.exports = {
    createUser,
};