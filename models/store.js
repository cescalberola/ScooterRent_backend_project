'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    
    static associate(models) {
      Store.belongsToMany(models.Scooter,{
        through:models.StoreScooter
      })
    }
  }
  Store.init({
    StoreName: DataTypes.STRING,
    City: DataTypes.STRING,
    Adress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};