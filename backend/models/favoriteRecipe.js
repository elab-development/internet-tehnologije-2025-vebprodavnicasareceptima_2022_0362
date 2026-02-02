'use strict';

module.exports = (sequelize, DataTypes) => {
  const FavoriteRecipe = sequelize.define(
    'FavoriteRecipe',
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      tableName: 'favorite_recipes',
      timestamps: true,
    }
  );

  return FavoriteRecipe;
};
