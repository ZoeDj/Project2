module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define("Reviews", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Reviews;
};
