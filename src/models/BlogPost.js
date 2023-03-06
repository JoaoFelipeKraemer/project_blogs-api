// src/models/user.model.js

const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          title: DataTypes.STRING,          
          content: DataTypes.STRING,          
          userId: DataTypes.STRING,          
          published : DataTypes.DATE,
          updated: DataTypes.DATE,     
        },
          {
            tableName: 'blog_posts',
            timestamps: false,
            underscored: true,
          }
        );
        BlogPost.associate = (models) => {
            BlogPost.belongsTo(models.User,
             { foreignKey: 'userId', as: 'users' });
         };
    return BlogPost; 
  };
  
  module.exports = BlogPostModel;