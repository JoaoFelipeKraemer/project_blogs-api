// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          displayName: DataTypes.STRING,          
          email: DataTypes.STRING,          
          password: DataTypes.STRING,          
          image : DataTypes.STRING,          
        },
          {
            tableName: 'users',
            timestamps: false,
            underscored: true,
          }
        );
        // User.associate = (models) => {
        //     User.hasMany(models.blogPosts,
        //      { foreignKey: 'userId', as: 'blog_posts' });
        //  };
    return User; 
  };
  
  module.exports = UserModel;