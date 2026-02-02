'use strict';
 
module.exports = {

  async up(queryInterface, Sequelize) {

    // email NOT NULL + UNIQUE

    await queryInterface.changeColumn('Users', 'email', {

      type: Sequelize.STRING,

      allowNull: false,

      unique: true,

    });
 
    // name NOT NULL

    await queryInterface.changeColumn('Users', 'name', {

      type: Sequelize.STRING,

      allowNull: false,

    });
 
    // passwordHash NOT NULL

    await queryInterface.changeColumn('Users', 'passwordHash', {

      type: Sequelize.STRING,

      allowNull: false,

    });
 
    // role NOT NULL + default "user"

    await queryInterface.changeColumn('Users', 'role', {

      type: Sequelize.STRING,

      allowNull: false,

      defaultValue: 'user',

    });

  },
 
  async down(queryInterface, Sequelize) {

    await queryInterface.changeColumn('Users', 'email', {

      type: Sequelize.STRING,

      allowNull: true,

    });
 
    await queryInterface.changeColumn('Users', 'name', {

      type: Sequelize.STRING,

      allowNull: true,

    });
 
    await queryInterface.changeColumn('Users', 'passwordHash', {

      type: Sequelize.STRING,

      allowNull: true,

    });
 
    await queryInterface.changeColumn('Users', 'role', {

      type: Sequelize.STRING,

      allowNull: true,

    });

  }

};

 
