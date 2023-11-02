'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scooter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scooter.init({
    Brand: DataTypes.STRING,
    Model: DataTypes.STRING,
    StoreId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Scooter',
  });
  return Scooter;
};