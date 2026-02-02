'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      ingredientTypeId: { type: DataTypes.INTEGER, allowNull: false },
      packageAmount: { type: DataTypes.STRING, allowNull: true },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: true },
    },
    {
      tableName: 'products',
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.IngredientType, { foreignKey: 'ingredientTypeId' });

    // user-products (moji proizvodi)
    Product.belongsToMany(models.User, {
      through: models.UserProduct,
      foreignKey: 'productId',
      otherKey: 'userId',
    });
  };

  return Product;
};
