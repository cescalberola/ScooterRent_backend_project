'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerScooter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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