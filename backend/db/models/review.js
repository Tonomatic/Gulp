'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewText: DataTypes.STRING,
    reviewPhotos: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    reviewMark: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};