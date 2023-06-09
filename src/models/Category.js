const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: DataTypes.STRING,
         },
        {
          timestamps: false,
          tableName: 'categories',
          underscored  : true,
        }
   )
   return Category;
}

module.exports = CategoryModel;