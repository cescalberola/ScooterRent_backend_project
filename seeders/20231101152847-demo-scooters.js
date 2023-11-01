'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Scooters', [
      {
      Brand: "Cecotec",
      Model: "Bongo Serie Y65",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Segway",
      Model: "E2 Pro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Zwheel",
      Model: "T4 Zrino",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "SmartGyro",
      Model: "Xtreme Speedway Pro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Ninebot",
      Model: "G30 Max",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Xiaomi",
      Model: "m360",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
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
