'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      ingredientTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'ingredient_types', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      packageAmount: { type: Sequelize.STRING, allowNull: true },
      price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      imageUrl: { type: Sequelize.STRING, allowNull: true },

      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};

