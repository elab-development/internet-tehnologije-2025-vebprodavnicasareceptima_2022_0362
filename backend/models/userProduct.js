'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserProduct = sequelize.define(
    'UserProduct',
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    },
    {
      tableName: 'user_products',
      timestamps: true,
    }
  );

  return UserProduct;
};
