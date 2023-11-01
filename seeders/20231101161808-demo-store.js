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
    }
  ])
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
