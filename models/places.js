module.exports = function(sequelize, DataTypes) {
  var Places = sequelize.define("Places", {
    place_name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    wifi: DataTypes.BOOLEAN,
    pet_friendly: DataTypes.BOOLEAN,
    bigtables: DataTypes.BOOLEAN,
    neighborhood: DataTypes.STRING,
    address: DataTypes.STRING,
    waiters: DataTypes.BOOLEAN,
    kidfriendly: DataTypes.BOOLEAN,
    website: DataTypes.STRING
  }
  );
  
  // Place.associate = function(models) {
  //   // assoiates a place with its reviews
  //   Place.hasMany(models.Review, {
  //     onDelete: "cascade"
  //   });
  // };

  return Places;
};


