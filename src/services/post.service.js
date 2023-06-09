// const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { PostCategory, Category, BlogPost, User } = require('../models');
// 1 a verificação do db
// 2 e a automatização de updated e published
const createPost = async (title, content, categoryIds, userId) => {
    const promises = categoryIds.map((id) => Category.findOne({ where: { id } })); // array = 1000 - o db é acessado 1000x --findAndCountAll constulta todo o db de 1 vez
    const resolved = await Promise.all(promises);
     if (resolved.some((e) => e == null)) { // pega undefined e null
        return { type: 400, message: 'one or more "categoryIds" not found' };
     }
     
        const newPost = await BlogPost.create({ title, content, userId });
        const result = await categoryIds.map((id) => PostCategory.create({ 
            categoryId: id, 
            postId: newPost.id, 
          }));
        await Promise.all(result);
    return newPost;
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

const getPostById = async (id) => {
    const all = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return all;
};

const editById = async (id, { title, content }) => {
    await BlogPost.update(
        {
          title,
          content,
        },
        { where: { id } },
      );
      const all = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return all;
};

const deleteById = async (id) => {
    const del = BlogPost.destroy(
        { where: { id } },
    );
    return del;
};

const getBySearch = (q) => BlogPost.findAll({
    where: {
      [Op.or]:
       [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
       ],
      },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
module.exports = {
    getBySearch,
    deleteById,
    editById,
    createPost,
    getAllPosts,
    getPostById,
};