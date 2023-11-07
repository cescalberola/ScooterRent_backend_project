'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Stores', [
      {
      StoreName: "Urban Mover",
      City: "Valencia",
      Adress: "Calle Colón, 16",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      StoreName: "Patinet",
      City: "Valencia",
      Adress: "Paseo Germanias, 162",
      createdAt: new Date(),
      updatedAt: new Date()
      }
  ])
  },
  
  async down (queryInterface, Sequelize) {
 
  }
};
