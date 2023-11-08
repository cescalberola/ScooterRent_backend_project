'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Reviews', [
      {
      title: "Cecotec",
      content:  "The Cecotec is a great budget-friendly scooter. It's lightweight, easy to maneuver, and the battery lasts for a good distance. Perfect for short commutes in the city.",
      ScooterId: 1,
      CustomerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "Segway",
      content:  "The Segway is a beast! It's got incredible speed and range. The build quality is top-notch, and the ride is smooth. Definitely worth the investment.",
      ScooterId: 2,
      CustomerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "Zwheel",
      content:  "The Zwheel is an okay scooter for beginners. It's affordable, but the battery life could be better. Decent for casual rides, but not for long distances.",
      ScooterId: 3,
      CustomerId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "SmartGyro",
      content: "The SmartGyro is a fantastic scooter for the price. It's zippy, has a comfortable ride, and the battery lasts a long time. Highly recommended for daily commuting." ,
      ScooterId: 4,
      CustomerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
      {
      title: "Ninebot",
      content:  "The Ninebot is a fantastic scooter for the price. It's zippy, has a comfortable ride, and the battery lasts a long time. Highly recommended for daily commuting.",
      ScooterId: 5,
      CustomerId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "Xiaomi",
      content:  "The Xiaomi is an average scooter. It offers decent speed and range, but it's a bit on the heavy side. It's suitable for basic commuting needs.",
      ScooterId: 6,
      CustomerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ])
  },

  async down (queryInterface, Sequelize) {
  
  }
};
