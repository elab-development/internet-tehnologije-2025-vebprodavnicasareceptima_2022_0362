'use strict';

module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define(
    'RecipeIngredient',
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      ingredientTypeId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
      unit: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: 'recipe_ingredients',
    }
  );

  RecipeIngredient.associate = (models) => {
    RecipeIngredient.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    RecipeIngredient.belongsTo(models.IngredientType, { foreignKey: 'ingredientTypeId' });
  };

  return RecipeIngredient;
};
