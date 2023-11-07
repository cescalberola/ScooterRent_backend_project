'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Customers', [
      {
        FirstName: "Francesc",
        LastName: "Alberola",
        email:"francesc@gmail.com",
        password: "123456",
        PhoneNumber: "666666666",
        role:"admin",
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        FirstName: "Andreu",
        LastName: "Alberola",
        email:"andreu@gmail.com",
        password: "123456",
        PhoneNumber: "123123123",
        role:"customer",
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        FirstName: "Dem",
        LastName: "Previotto",
        email:"dem@gmail.com",
        password: "123456",
        PhoneNumber: "234234234",
        role:"customer",
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        FirstName: "Sales",
        LastName: "Villa",
        email:"sales@gmail.com",
        password: "123456",
        PhoneNumber: "123456789",
        role:"customer",
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        FirstName: "Oriol",
        LastName: "Alberola",
        email: "oriol@gmail.com",
        password: "123456",
        PhoneNumber: "090909999",
        role:"customer",
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        FirstName: "Miki",
        LastName: "Mikado",
        email: "miki@gmail.com",
        password: "123456",
        PhoneNumber: "098765432",
        role:"customer",
        createdAt: new Date(),
        updatedAt: new Date()
    },
     
  
  ])
  },

  async down (queryInterface, Sequelize) {
  
  }
};
