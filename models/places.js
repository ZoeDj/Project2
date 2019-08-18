module.exports = function(sequelize, DataTypes) {
  var Places = sequelize.define("Places", {
    place_name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    wifi: DataTypes.BOOLEAN,
    pet_friendly: DataTypes.BOOLEAN,
    large_groups: DataTypes.BOOLEAN
  }
  );
  return Places;
};
