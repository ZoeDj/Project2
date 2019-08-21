module.exports = function(sequelize, DataTypes) {
  var reviews = sequelize.define("reviews", {
    user_name: DataTypes.STRING,
    place_name: DataTypes.STRING,
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  });

  reviews.associate = function(models) {
    // associates the review with the place to which is pertains
    reviews.belongsTo(models.places, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return reviews;
};