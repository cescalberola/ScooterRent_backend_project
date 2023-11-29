'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
    Customer.belongsToMany(models.Scooter,{
      through:models.CustomerScooter 
    })
    Customer.hasMany(models.Review);
    Customer.hasMany(models.CustomerScooter);
    }
  }
    Customer.init({
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Insert your first name, please",
          },
        },
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Insert your last name, please",
          },
        },
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Insert your email, please",
          },
        },
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Insert your password, please",
          },
        },
      },
      PhoneNumber:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Insert your phone number, please",
          },
        },
      },
      role: DataTypes.STRING
    }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};