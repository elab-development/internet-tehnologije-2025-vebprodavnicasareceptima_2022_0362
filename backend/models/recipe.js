'use strict';

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: true },
      imageUrl: { type: DataTypes.STRING, allowNull: true },
      difficulty: { type: DataTypes.STRING, allowNull: true },
      prepTimeMinutes: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      tableName: 'recipes',
    }
  );

  Recipe.associate = (models) => {
    Recipe.hasMany(models.RecipeIngredient, { foreignKey: 'recipeId' });

    // omiljeni
    Recipe.belongsToMany(models.User, {
      through: models.FavoriteRecipe,
      foreignKey: 'recipeId',
      otherKey: 'userId',
    });
  };

  return Recipe;
};
