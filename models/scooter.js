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
   
      Scooter.belongsTo(models.Store, { foreignKey: 'StoreId' });

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
        Img:DataTypes.STRING,
        
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
      }, {
        sequelize,
        modelName: 'Scooter',
      });
      return Scooter;
    };