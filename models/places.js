module.exports = function(sequelize, DataTypes) {
  var places = sequelize.define("places", {
    place_name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    wifi: DataTypes.BOOLEAN,
    pet_friendly: DataTypes.BOOLEAN,
    bigtables: DataTypes.BOOLEAN,
    neighborhood: DataTypes.STRING,
    address: DataTypes.STRING,
    waiters: DataTypes.BOOLEAN,
    kidfriendly: DataTypes.BOOLEAN,
    website: DataTypes.STRING,
  }
  );
  
  places.associate = function(models) {
    // assoiates a place with its reviews
    places.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return places;
};


