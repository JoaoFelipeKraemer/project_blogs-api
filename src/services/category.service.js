const { Category } = require('../models');

const createCategory = async (name) => {
    const newName = await Category.create({ name });
    return newName;
};  

module.exports = {
    createCategory,
};
