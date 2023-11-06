'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scooter extends Model {

    static associate(models) {
      Scooter.belongsToMany(models.Customer,{
        through:models.CustomerScooter 
      })
      Scooter.belongsTo(models.Store,{
        through:models.StoreScooter
      })
      Scooter.hasMany(models.Review)
    
    }
  }
      Scooter.init({
        Brand: DataTypes.STRING,
        Model: DataTypes.STRING,
        Price:DataTypes.INTEGER,
        StoreId:DataTypes.INTEGER,
        ReviewId: DataTypes.INTEGER
      }, {
        sequelize,
        modelName: 'Scooter',
      });
      return Scooter;
    };