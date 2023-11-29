'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scooters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Brand: {
        type: Sequelize.STRING
      },
      Model: {
        type: Sequelize.STRING
      },
      Img: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      StoreId:{
        type: Sequelize.INTEGER
      },
      ReviewId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scooters');
  }
};