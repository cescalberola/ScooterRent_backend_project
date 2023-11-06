'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Stores', [
      {
      StoreName: "UrbanMover",
      City: "Valencia",
      Adress: "Calle Colón, 16",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      StoreName: "UrbanMover",
      City: "Valencia",
      Adress: "Paseo Germanias, 162",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      StoreName: "UrbanMover",
      City: "Valencia",
      Adress: "Calle Denia, 12",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },
  
  async down (queryInterface, Sequelize) {
 
  }
};
