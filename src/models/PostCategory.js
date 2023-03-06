// src/models/user.model.js

const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,     
        },
          {
            tableName: 'posts_categories',
            timestamps: false,
            underscored: true,
          }
        );
        PostCategory.associate = ({BlogPost, Category}) => {
            BlogPost.belongsToMany(Category, { 
                as: 'categories',
                through: PostCategory,
                foreignKey: 'postId',
                otherKey: 'categoryId'
                 
             });
             Category.belongsToMany(BlogPost, { 
                as: 'blog_posts',
                through: PostCategory,
                foreignKey: 'categoryId',
                otherKey: 'postId'
                 
             }); 
         };

    return PostCategory; 
  };
  
  module.exports = PostCategoryModel;