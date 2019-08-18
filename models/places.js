module.exports = function(sequelize, DataTypes) {
  var Places = sequelize.define("Places", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Places;
};
