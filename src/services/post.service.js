// const jwt = require('jsonwebtoken');
const { PostCategory, Category, BlogPost, User } = require('../models');
// const { findAllCategory } = require('./category.service');

// verifica db
const verifyId = async (categoryIds) => {
    // const all = await findAllCategory();
   const promises = await categoryIds.map((id) => Category.findByPk(id)); // array = 1000 - o db é acessado 1000x --findAndCountAll constulta todo o db de 1 vez
   const resolved = await Promise.all(promises);
    if (categoryIds.length !== resolved.length) {
       return { type: 400, message: 'one or more "categoryIds" not found' };
    }
};  
// payload do auth
// 1 a verificação do db
// 2 e a automatização de updated e published
const createPost = async (title, content, categoryIds, userId) => {
 const valida = await verifyId(categoryIds);
    if (valida.message) {
        const newPost = await BlogPost.create({ title, content, userId });
        const result = await categoryIds.map((id) => PostCategory.create({ 
            categoryId: id, 
            postId: newPost.id, 
          }));
        await Promise.all(result);
    return newPost;
    } 
    return valida.message;
};

const getAllPosts = async () => {
    const all = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return all;
};

module.exports = {
    verifyId,
    createPost,
    getAllPosts,
};