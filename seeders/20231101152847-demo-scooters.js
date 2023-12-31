'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Scooters', [
      {
      Brand: "Cecotec",
      Model: "Bongo Serie Y65",
      Price: 25,
      StoreId: 1,
      ReviewId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Segway",
      Model: "E2 Pro",
      Price: 32,
      StoreId: 1,
      ReviewId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Zwheel",
      Model: "T4 Zrino",
      Price: 35,
      StoreId: 1,
      ReviewId: 3, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "SmartGyro",
      Model: "Xtreme Speedway Pro",
      Price: 22,
      StoreId: 1,
      ReviewId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Ninebot",
      Model: "G30 Max",
      Price: 37,
      StoreId: 1,
      ReviewId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      Brand: "Xiaomi",
      Model: "m360",
      Price: 20,
      StoreId: 1,
      ReviewId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
      
  ])
  },

  async down (queryInterface, Sequelize) {
  
  }
};
