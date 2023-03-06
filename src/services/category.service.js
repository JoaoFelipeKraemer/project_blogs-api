const { Category } = require('../models');

const createCategory = async (name) => {
    const newName = await Category.create({ name });
    return newName;
};  

const findAllCategory = async () => {
    const all = await Category.findAll();
    return all;
};

module.exports = {
    createCategory,
    findAllCategory,
};
