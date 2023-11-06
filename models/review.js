'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Customer);
      Review.belongsTo(models.Scooter);
    }
  }
  Review.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    CustomerId: DataTypes.INTEGER,
    ScooterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};