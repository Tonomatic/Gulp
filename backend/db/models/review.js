'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewPhotos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reviewMark: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
  };
  return Review;
};
