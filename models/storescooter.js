'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreScooter extends Model {
    static associate(models) {
      StoreScooter.hasMany(models.Scooter)
    }
  }
  StoreScooter.init({
    StoreId: DataTypes.INTEGER,
    ScooterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StoreScooter',
  });
  return StoreScooter;
};