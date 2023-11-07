'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerScooter extends Model {
    static associate(models) {

      CustomerScooter.belongsTo(models.Customer);
      CustomerScooter.belongsTo(models.Scooter);
    }
  }
  CustomerScooter.init({
    ScooterId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CustomerScooter',
  });
  return CustomerScooter;
};