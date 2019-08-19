module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    user_name: DataTypes.STRING,
    place_name: DataTypes.STRING,
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  });

  Review.associate = function(models) {
    // associates the review with the place to which is pertains
    Review.belongsTo(models.Place, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Review;
};
