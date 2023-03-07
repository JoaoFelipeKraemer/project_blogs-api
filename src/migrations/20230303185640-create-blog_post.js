'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        allowNull:false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updated: {
        allowNull:false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      
      });

  },

  down: async (queryInterface, Sequelize) => {


     await queryInterface.dropTable('blog_posts');

  }
};
