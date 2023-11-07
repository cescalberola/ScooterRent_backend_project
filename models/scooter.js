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
      Scooter.belongsToMany(models.Store,{
        through:models.StoreScooter
      })
      Scooter.hasMany(models.Review)
    
    }
  }
      Scooter.init({
        Brand:{
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Insert brand scooter, please",
            },
          },
        },
        Model:{
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Insert your scooter model, please",
            },
          },
        },
        Price:{
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Insert price, please",
            },
          },
        },
        StoreId:DataTypes.INTEGER,
        ReviewId: DataTypes.INTEGER
      }, {
        sequelize,
        modelName: 'Scooter',
      });
      return Scooter;
    };