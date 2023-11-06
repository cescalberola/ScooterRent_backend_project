'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.changeColumn("Customers", "email", {
    
    type:Sequelize.STRING,
    
    unique:true
    
    });
    
    },

  async down (queryInterface, Sequelize) {
  
  }
};
