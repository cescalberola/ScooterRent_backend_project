'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerScooter extends Model {
    static associate(models) {
      // define association here
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